import Container from "@/components/common/Container";
import FilteredPosts from "@/components/posts/FilteredPosts";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Posts",
  description: "블로그 포스트 리스트",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <Container>
      <FilteredPosts posts={posts} categories={categories} />
    </Container>
  );
}
