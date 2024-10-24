import path from "path";
import { promises as fs } from "fs";

export type PostType = {
  title: string;
  description: string;
  date: string;
  category: "my story" | "javascript" | "frontend" | "backend";
  path: string;
  featured: boolean;
};

export async function getPosts(): Promise<PostType[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}
