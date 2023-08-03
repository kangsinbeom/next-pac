import FilterablePosts from "@/components/FilterablePosts";
import { getPostsAll } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getPostsAll();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <section>
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
