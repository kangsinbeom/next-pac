import { ProfileUser } from "@/model/user";

interface Props {
  user: ProfileUser;
}
const UserProfile = ({ user }: Props) => {
  return <p>{user.username}</p>;
};

export default UserProfile;
