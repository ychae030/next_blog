"use client";

import React, { useState } from "react";
import CardGrid from "./CardGrid";
import Categories from "./Categories";
import { PostType } from "@/service/posts";

type Props = {
  posts: PostType[];
  categories: string[];
};

const ALL_POSTS = "All Posts";
export default function FilteredPosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <>
      <Categories
        handleClick={setSelected}
        selected={selected}
        categories={[ALL_POSTS, ...categories]}
      />
      <div className="pb-10">
        <CardGrid posts={filtered} gap="gap-y-6" />
      </div>
    </>
  );
}
