import CardGrid from "@/components/posts/CardGrid";
import { getAllPosts } from "@/service/posts";
import React from "react";

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <div className="py-10">
      <CardGrid posts={posts} gap="gap-y-6" />
    </div>
  );
}
