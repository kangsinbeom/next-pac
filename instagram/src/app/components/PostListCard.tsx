"use client";
import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import Image from "next/image";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import parseDate from "@/util/date";
import SmileIcon from "./ui/icons/SmileIcon";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "./PostUserAvatar";
import ActionBar from "./ActionBar";
import CommentForm from "./commentForm";
interface Props {
  post: SimplePost;
}

const PostListCard = ({ post }: Props) => {
  const { comments, createdAt, id, image, likes, text, userImage, username } =
    post;
  const [openModal, setOpenModal] = useState(false);
  return (
    <article className="rounded-lg shadow-md border border-gray-100">
      <PostUserAvatar image={userImage} username={username} />
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        onClick={() => setOpenModal((prev) => !prev)}
      />
      <div className="flex justify-between my-2 p-4">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <ActionBar
        createdAt={createdAt}
        likes={likes}
        username={username}
        text={text}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
};

export default PostListCard;
