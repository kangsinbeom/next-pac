import { AuthUser } from "@/model/user";
import Avatar from "./Avatar";

interface Props {
  user: AuthUser;
}
const SideBar = ({ user }: Props) => {
  const { email, name, username, image } = user;
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar size="large" image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About About About About About About About About{" "}
      </p>
      <p className="font-bold text-sm text-neutral-500 mt-8">
        @Copyright INSTANTGRAM from METAL
      </p>
    </>
  );
};

export default SideBar;
// leading-4 이게 뭐지?
