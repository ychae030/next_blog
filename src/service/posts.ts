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
