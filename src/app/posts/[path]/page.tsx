import Container from "@/components/common/Container";
import MarkdownViewer from "@/components/posts/MarkdownViewer";
import PostMetadata from "@/components/posts/PostMetadata";
import { getPostData } from "@/service/posts";
import React from "react";

type Props = {
  params: Promise<{
    path: string;
  }>;
};

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
