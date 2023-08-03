import { Post } from "@/service/posts";
import Card from "./Card";
type Props = {
  posts: Post[];
};
export default function PostGrid({ posts }: Props) {
  return (
    <ul className="grid gap-4 grid-col-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <Card post={post} />
        </li>
      ))}
    </ul>
  );
}
