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
const menu = [
  { href: "/", icon: <HomeIcon />, clickIcon: <HomeFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickIcon: <NewFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickIcon: <SearchFillIcon /> },
];
const Navbar = () => {
  const pathName = usePathname();
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
          <ColorButton onClick={() => {}} text="Sign in" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
