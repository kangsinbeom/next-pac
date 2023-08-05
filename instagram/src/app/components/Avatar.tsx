interface Props {
  image?: string | null;
  size: "normal" | "small";
  highlight?: boolean;
}

const getContainerStyle = (size: string, highlight: boolean): string => {
  const baseStyle = "rounded-full flex items-center justify-center ";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = size === "small" ? "w-9 h-9" : "w-[68px] h-[68px]";
  return `${baseStyle} ${sizeStyle} ${highlightStyle}`;
};
const getImageSizeStyle = (size: string): string => {
  return size === "small"
    ? "w-[34px] h-[34px] p-[0.1rem]"
    : "w-16 h-16 p-[0.2rem]";
};
const Avatar: React.FC<Props> = ({
  image,
  size = "normal",
  highlight = false,
}) => {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        src={image ?? undefined}
        alt="user profile"
      />
    </div>
  );
};

export default Avatar;
{
  /* 일반 이미지 태그를 사용해야 하는 이유 기억하기
외부 API에서 끌어오는데 어떤 도메인을 가지는지는 우리가 특정 url을 지정할 수 없다
나중에 여러 provider를 사용한다면 각각 다르기 때문에 next.js에서 제공하는
img를 쓸 수 없다 next.config에 추가를 하는 방식으로 로컬이나 밖에서 끌어
왔는데 지금은 잘 안된다
*/
}
