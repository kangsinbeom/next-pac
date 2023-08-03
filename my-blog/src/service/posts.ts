import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  const filePatch = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePatch, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.filter((post) => !post.featured));
}
// 아니면 배열을 만들어서 all 에서 Featured를 뺴는방법은 어떤가?

export async function getPostsAll(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
