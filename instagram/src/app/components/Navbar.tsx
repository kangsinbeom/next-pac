"use client";

import Link from "next/link";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./Avatar";
const menu = [
  { href: "/", icon: <HomeIcon />, clickIcon: <HomeFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickIcon: <NewFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickIcon: <SearchFillIcon /> },
];
const Navbar = () => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="flex justify-between items-center px-6">
      <Link href={"/"}>
        <h1 className="font-bold text-3xl">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((data) => (
            <li key={data.href}>
              {" "}
              <Link href={data.href}>
                {pathName === data.href ? data.clickIcon : data.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar size="small" highlight={true} image={user.image} />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton onClick={() => signOut()} text="Sign out" />
            ) : (
              <ColorButton onClick={() => signIn()} text="Sign in" />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
