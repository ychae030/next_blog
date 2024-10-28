import path from "path";
import { promises as fs } from "fs";

export type PostType = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostDataType = PostType & {
  content: string;
};

export async function getNonFeaturedPosts(): Promise<PostType[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getFeaturedPosts(): Promise<PostType[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts(): Promise<PostType[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return fs
    .readFile(filePath, "utf-8")
    .then<PostType[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(fileName: string): Promise<PostDataType> {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName),
  );

  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await fs.readFile(filePath, "utf-8");
  return { ...metadata, content };
}
