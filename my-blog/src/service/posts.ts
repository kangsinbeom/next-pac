import { readFile } from "fs/promises";
import path from "path";

export interface Post {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

export interface PostData extends Post {
  content: string;
  next: Post | null;
  prev: Post | null;
}

export const getFeaturedPosts = async (): Promise<Post[]> => {
  const filePatch = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePatch, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.filter((post) => post.featured));
};

export const getNonFeaturedPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.filter((post) => !post.featured));
};
// 아니면 배열을 만들어서 all 에서 Featured를 뺴는방법은 어떤가?

export const getPostsAll = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};
export const getPostData = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getPostsAll();
  const post = posts.find((post) => post.path === fileName);
  // if문 위에 선언 되면 안되는 index인데 이유는?
  if (!post) throw new Error(`${fileName} does not exist`);
  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
};
