import { getPosts } from "@/service/posts";
import React from "react";

import CardSlider from "./CardSlider";

export default async function Cards() {
  const posts = await getPosts();
  return (
    <section>
      <h3 className="mb-3">You may Like</h3>
      <CardSlider posts={posts} />
    </section>
  );
}
