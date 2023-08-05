import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import Signin from "@/app/components/Signin";
interface Props {
  searchParams: {
    callbackUrl: string;
  };
}
const SigninPage: React.FC<Props> = async ({
  searchParams: { callbackUrl },
}) => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};
  return (
    <section className="flex justify-center mt-24">
      <Signin providers={providers} callbackUrl={callbackUrl} />
    </section>
  );
};

export default SigninPage;
