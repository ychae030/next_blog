import Profile from "@/components/about/Profile";
import FeaturedCards from "@/components/posts/FeaturedCards";
import CarouselCards from "@/components/posts/CarouselCards";
import Container from "@/components/common/Container";

export default function HomePage() {
  return (
    <section>
      <Container>
        <Profile />
        <FeaturedCards />
        <CarouselCards />
      </Container>
    </section>
  );
}
