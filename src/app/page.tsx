import Profile from "@/components/about/Profile";
import FeaturedCards from "@/components/posts/FeaturedCards";
import CarouselCards from "@/components/posts/CarouselCards";

export default function HomePage() {
  return (
    <section>
      <Profile />
      <FeaturedCards />
      <CarouselCards />
    </section>
  );
}
