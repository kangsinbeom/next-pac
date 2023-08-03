import Hero from "@/components/Hero";
import "./globals.css";
import FeaturedPsts from "@/components/FeaturedPosts";
import YouMayLike from "@/components/YouMayLike";

export default function HomePage() {
  return (
    <section>
      <Hero />
      <FeaturedPsts />
      <YouMayLike />
    </section>
  );
}

// 한 컴포넌트 내에서 너무 많은 책임을 가지게 되면 안되므로
// 모듈화를 잘해야 된다 (재사용성도 떨어짐)
