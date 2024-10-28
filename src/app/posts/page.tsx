import Container from "@/components/common/Container";
import FilteredPosts from "@/components/posts/FilteredPosts";
import { getAllPosts } from "@/service/posts";
import React from "react";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <Container>
      <FilteredPosts posts={posts} categories={categories} />
    </Container>
  );
}
