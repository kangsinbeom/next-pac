"use client";

import { HomeUser, ProfileUser } from "@/model/user";
import useSWR from "swr";
import Button from "./ui/Button";
interface Props {
  user: ProfileUser;
}

const FollowButton = ({ user }: Props) => {
  const { data: loggedInUser } = useSWR<HomeUser>("/api/me");
  console.log(user);

  const showButton = loggedInUser && loggedInUser.username !== user.username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === user.username);
  const text = following ? "Unfollow" : "Follow";
  return (
    <>
      {showButton && (
        <Button text={text} onClick={() => {}} red={text === "Unfollow"} />
      )}
    </>
  );
};

export default FollowButton;
