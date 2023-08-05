export interface AuthUser {
  username: string;
  name: string;
  email: string;
  image?: string;
}

export interface SimpleUser {
  username: AuthUser["username"];
  image: AuthUser["image"];
}

export interface HomeUser extends AuthUser {
  following: SimpleUser[];
  follower: SimpleUser[];
  bookmarks: string[];
}

export interface SearchUser extends AuthUser {
  following: number;
  follower: number;
}

export interface ProfileUser extends SearchUser {
  posts: number;
}
