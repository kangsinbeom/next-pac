import AdjacentCard from "@/components/AdjacentCard";
import MarkdownViewer from "@/components/MarkdowmViewer";
import PostContact from "@/components/PostContact";
import { getPostData } from "@/service/posts";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}
const Detailpage: React.FC<Props> = async ({ params: { slug } }) => {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        alt={title}
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
      />
      <PostContact post={post} />
      {prev && <AdjacentCard post={prev} type="prev" />}
      {next && <AdjacentCard post={next} type="next" />}
    </article>
  );
};

export default Detailpage;
