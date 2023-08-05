import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "../../auth/[...nextauth]/route";
import { getPost } from "@/service/post";

interface Context {
  params: { id: string };
}
export const GET = async (request: NextResponse, context: Context) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getPost(context.params.id).then((data) => NextResponse.json(data));
};
