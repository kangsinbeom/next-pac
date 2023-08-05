import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

interface Context {
  params: { keyword: string };
}
export const GET = async (_: NextResponse, context: Context) => {
  return searchUsers(context.params.keyword).then((data) =>
    NextResponse.json(data)
  );
};
