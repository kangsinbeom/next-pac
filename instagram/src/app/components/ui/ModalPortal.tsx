import reactDom from "react-dom";

interface Props {
  children: React.ReactNode;
}
const ModalPortal = ({ children }: Props) => {
  if (typeof window === "undefined") {
    return null;
  }
  const node = document.getElementById("portal") as Element;
  return reactDom.createPortal(children, node);
};

export default ModalPortal;
