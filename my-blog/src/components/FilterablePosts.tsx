"use client";
import { Post } from "@/service/posts";
import { useState } from "react";
import PostGrid from "./PostsGrid";
type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POST = "All Posts";
export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POST);
  const filtered =
    selected === ALL_POST
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section>
      <PostGrid posts={filtered} />
    </section>
  );
}
