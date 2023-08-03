import { PostData } from "@/service/posts";
import MarkdownViewer from "./MarkdowmViewer";
//  이부분이 잘 이해가 가지 않는다 FC로 변환하면 어떻게 나와야하는가
const PostContact = ({ post }: { post: PostData }) => {
  const { title, description, content } = post;
  return (
    <section className="flex flex-col p-4 w-full">
      <h1>{title}</h1>
      <p>{description}</p>
      <MarkdownViewer content={content} />
    </section>
  );
};

export default PostContact;
