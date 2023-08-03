import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function Card({
  post: { category, date, description, featured, path, title },
}: Props) {
  return (
    <section className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
      <Link href={`/posts/${path}`}>
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={300}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h2 className="text-lg font-bold truncate">{title}</h2>
          <span className="w-full truncate text-center">{description}</span>
          <p className="text-sm rounded-lg bg-green-100 px-4 my-2">
            {category}
          </p>
        </div>
      </Link>
    </section>
  );
}
