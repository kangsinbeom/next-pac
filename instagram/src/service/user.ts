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
    follower: [],
    bookmarks: [],
  });
};

const getUserByUsername = async (username: string) => {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      following[]->{username, image},
      follower[]->{username, image},
      "bookmarks": bookmarks[]->_id
    }`
  );
};

export { addUser, getUserByUsername };

// 세네티에서 비전으로 확인할 수 있는 feth의 내용
