import { getNonFeaturedPosts } from "@/service/posts";
import Card from "./Card";
import MultiCarousel from "./MultiCarousel";
export default async function YouMayLike() {
  const posts = await getNonFeaturedPosts();
  return (
    <section>
      <h2 className="font-bold text-3xl my-2">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <Card key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
