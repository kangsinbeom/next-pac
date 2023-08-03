import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h2 className="font-bold text-3xl my-2">Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
