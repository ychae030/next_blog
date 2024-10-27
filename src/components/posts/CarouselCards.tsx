import React from "react";
import Carousel from "./Carousel";
import { getAllPosts } from "@/service/posts";

export default async function CarouselCards() {
  const posts = await getAllPosts();
  return (
    <section>
      <h3 className="mb-3">You may Like</h3>
      <Carousel posts={posts} />
    </section>
  );
}
