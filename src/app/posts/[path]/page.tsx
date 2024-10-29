import Container from "@/components/common/Container";
import MarkdownViewer from "@/components/posts/MarkdownViewer";
import PostMetadata from "@/components/posts/PostMetadata";
import { getPostData } from "@/service/posts";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    path: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;
  const { title, description } = await getPostData(path);
  return {
    title,
    description,
  };
}

export default async function PostDetailPage({ params }: Props) {
  const { path } = await params;
  const post = await getPostData(path);
  const { content } = post;
  return (
    <article>
      <PostMetadata post={post} />
      <Container>
        <MarkdownViewer content={content} />
      </Container>
    </article>
  );
}
