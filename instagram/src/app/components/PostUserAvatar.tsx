import Avatar from "./Avatar";
interface Props {
  image: string;
  username: string;
}
const PostUserAvatar = ({ image, username }: Props) => {
  return (
    <div className="flex items-center p-2">
      <Avatar size="medium" image={image} highlight />
      <span className="text-gray-900 font-bold ml-2">{username}</span>
    </div>
  );
};

export default PostUserAvatar;
