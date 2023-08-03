export interface BannerProps {
  message: string;
  state: "success" | "error";
}

const Banner = ({ banner: { message, state } }: { banner: BannerProps }) => {
  const isSuccess = state === "success";
  const icon = isSuccess ? "성공성공" : "실패실패";
  return (
    <>
      <p
        className={`p-2 ${isSuccess ? "bg-green-300" : "bg-red-300"}`}
      >{`${icon} ${message}`}</p>
    </>
  );
};

export default Banner;
