import Profile from "@/components/about/Profile";
import Cards from "@/components/posts/Cards";
import FeaturedCards from "@/components/posts/FeaturedCards";

export default function HomePage() {
  return (
    <>
      <Profile />
      <FeaturedCards />
      <Cards />
    </>
  );
}
