interface Props {
  text: string;
  onClick: () => void;
  size?: "large" | "small";
}
const ColorButton: React.FC<Props> = ({ text, onClick, size = "small" }) => {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ${
        size === "large" ? "p-[0.3rem]" : "p-[0.15rem]"
      }`}
    >
      <button
        className={`bg-white rounded-sm hover:opacity-90 transition-opacity ${
          size === "large" ? "p-4 text-2xl" : "text-base p-[0.3rem]"
        } `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ColorButton;
