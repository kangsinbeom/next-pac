import { SearchUser } from "@/model/user";
import { client } from "./sanity";

interface OAuthUser {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
}

const addUser = ({ id, username, email, name, image }: OAuthUser) => {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
};

const getUserByUsername = async (username: string) => {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      following[]->{username,image},
      follower[]->{username,image},
      "bookmarks":bookmarks[]->_id
    }`
  );
};

const searchUsers = async (keyword?: string) => {
  const query = keyword
    ? `&& (name match "${keyword}") || (username match "${keyword}")`
    : "";
  return client
    .fetch(
      `*[_type =="user" ${query}]{
    ...,
    "following": count(following),
    "follower": count(followers),
  }`
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        following: user.following ?? 0,
        follower: user.follower ?? 0,
      }))
    );
};

const getUserFroProfile = async (username: string) => {
  return client
    .fetch(
      `*[_type == "user" && username == "${username}"][0]{
    ...,
    "id":_id,
    "following": count(following),
    "follower": count(follower),
    "posts": count(*[_type=="post" && author->username == "${username}"])
  }
  `
    )
    .then((user) => ({
      ...user,
      following: user.following ?? 0,
      follower: user.follower ?? 0,
    }));
};

export { addUser, getUserByUsername, searchUsers, getUserFroProfile };

// 세네티에서 비전으로 확인할 수 있는 feth의 내용
