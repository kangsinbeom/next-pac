import { getLikedPostOf, getPostOf, getSavedPostOf } from "@/service/post";
import { NextRequest, NextResponse } from "next/server";
interface Context {
  params: {
    slug: string[];
  };
}

const GET = async (_: NextRequest, context: Context) => {
  const { slug } = context.params;
  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }
  const [username, query] = slug;

  let request = getPostOf;
  if (query === "saved") {
    request = getSavedPostOf;
  } else if (query === "liked") {
    request = getLikedPostOf;
  }
  return request(username).then((data) => NextResponse.json(data));
};
export default GET;
