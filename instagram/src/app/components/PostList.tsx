"use client";
import { SimplePost } from "@/model/post";
import useSWR from "swr";
const PostList = () => {
  const { data, isLoading, error } = useSWR<SimplePost>("/api/post");
  console.log(data);
  return <div>PostList</div>;
};

export default PostList;
