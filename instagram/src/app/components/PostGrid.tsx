import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostGridCard from "./PostGridCard";
interface Props {
  username: string;
  query: string;
}

const PostGrid = ({ username, query }: Props) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/users/${username}/${query}`);
  return (
    <div className="w-full text-center">
      {isLoading && <p>로딩중</p>}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostGrid;
