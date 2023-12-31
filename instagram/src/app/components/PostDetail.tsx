import { FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import useSWR from "swr";
import PostUserAvatar from "./PostUserAvatar";
import ActionBar from "./ActionBar";
import Avatar from "./Avatar";
import CommentForm from "./commentForm";
interface Props {
  post: SimplePost;
}

const PostDetail = ({ post }: Props) => {
  const { createdAt, id, image, likes, text, userImage, username } = post;
  const { data } = useSWR<FullPost>(`/api/post/${id}`);
  const comments = data?.comments;
  console.log("data", data);

  console.log(comments);
  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5 ">
        <Image
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill // 여기 헷갈릴듯
          sizes="650px"
        />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <PostUserAvatar image={userImage} username={username} />

        <ul className="border-t border-gray-200 h-full overflow-y-auto p-4 mb-1">
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className="flex items-center mb-1">
                  <Avatar
                    image={image}
                    size="small"
                    highlight={commentUsername === username}
                  />
                  <div className="ml-2">
                    <span className="font-bold mr-1">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  );
};

export default PostDetail;

// priority 우선순위 높이기 먼저 랜더링되라
// fill을 사용했으니 relative 요소를 꼭 지정해주자
