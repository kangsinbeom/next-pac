import { Post } from "@/service/posts";
import { Butterfly_Kids } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
  type: "next" | "prev";
}

const AdjacentCard: React.FC<Props> = ({ post, type }) => {
  const { path, title, description } = post;
  return (
    <Link href={`/posts/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div>
        {type === "prev" && <button>prev</button>}
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {type === "next" && <button>next</button>}
    </Link>
  );
};

export default AdjacentCard;
