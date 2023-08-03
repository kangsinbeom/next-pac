type Props = {
  children: React.ReactNode;
};

const PostsLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PostsLayout;
