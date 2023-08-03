type Props = {
  children: React.ReactNode;
};

export default function PostsLayout({ children }: Props) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
