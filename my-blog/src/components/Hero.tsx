import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <h2 className="font-bold text-3xl ">{"Hi, I'm good"}</h2>
      <h3 className="font-semibold text-xl mt-3 ">
        헬륨가스 먹었더니 이렇게 됬지
      </h3>
      <p>안녕안녕 나는 지수야</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 rounded-full px-4 py-1 mt-3 font-bold ">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
