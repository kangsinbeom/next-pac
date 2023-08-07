"use client";

import { ProfileUser } from "@/model/user";
import { useState } from "react";

import PostIcon from "./ui/icons/PostIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostGrid from "./PostGrid";
interface Props {
  user: ProfileUser;
}
const tabs = [
  { type: "post", icon: <PostIcon /> },
  { type: "saved", icon: <BookmarkIcon /> },
  { type: "likde", icon: <HeartIcon /> },
];
const UserPosts = ({ user: { username } }: Props) => {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul className="flex justify-center uppercase">
        {tabs.map(({ type, icon }) => (
          <li
            className={`mx-12 p-4 cursor-pointer border-black ${
              type === query && "font-bold border-t "
            }`}
            key={type}
            onClick={() => setQuery(type)}
          >
            <button className="scale-150 md:scale-100">{icon}</button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
};

export default UserPosts;
