import { getUserFroProfile } from "@/service/user";
import Notfound from "./not-found";

interface Props {
  params: { username: string };
}

const Userpage = async ({ params: { username } }: Props) => {
  const user = await getUserFroProfile(username);
  if (!user) {
    Notfound();
  }

  return <div></div>;
};

export default Userpage;
