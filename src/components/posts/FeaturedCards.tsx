import React from "react";
import { getFeaturedPosts } from "@/service/posts";

import CardGrid from "./CardGrid";

export default async function FeaturedCards() {
  const posts = await getFeaturedPosts();

  return (
    <section className="mb-16 mt-10">
      <h3 className="mb-3">Featured Posts</h3>
      <CardGrid posts={posts} />
    </section>
  );
}
