export interface User {
  username: string;
  name: string;
  email: string;
  image?: string;
}

export interface SimpleUser {
  username: string;
  image?: string;
}

export interface DetailUser extends User {
  following: SimpleUser[];
  follower: SimpleUser[];
  bookmarks: string[];
}
