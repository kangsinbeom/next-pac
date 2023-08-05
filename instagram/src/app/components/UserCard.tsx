import { SearchUser } from "@/model/user";
import Link from "next/link";
import Avatar from "./Avatar";
interface Props {
  user: SearchUser;
}

const UserCard = ({
  user: { name, username, image, follower, following },
}: Props) => {
  return (
    <Link
      className="flex items-center w-full rounded-sm border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50"
      href={`/user/${username}`}
    >
      <Avatar image={image} size="small" />
      <div className="text-neutral-500">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${follower} follower ${following} following`}</p>
      </div>
    </Link>
  );
};

export default UserCard;

{
  /* link tag가 사용자 브라우저상에 보여지면 경로에 해달하는 것을 pre fetch한다   */
}
