import { getUserFroProfile } from "@/service/user";
import Notfound from "./not-found";
import UserProfile from "@/app/components/UserProfile";
import UserPosts from "@/app/components/UserPosts";

interface Props {
  params: { username: string };
}

const Userpage = async ({ params: { username } }: Props) => {
  const user = await getUserFroProfile(username);
  if (!user) {
    Notfound();
  }

  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
};

export default Userpage;
