import Container from "@/components/common/Container";
import MarkdownViewer from "@/components/posts/MarkdownViewer";
import Metadata from "@/components/posts/Metadata";
import { getPostData } from "@/service/posts";
import React from "react";

type Props = {
  params: {
    path: string;
  };
};
export default async function PostDetailPage({ params }: Props) {
  const { path } = await params;
  const post = await getPostData(path);
  const { title, description, date, content } = post;
  return (
    <article>
      <Metadata post={post} />
      <Container>
        <MarkdownViewer content={content} />
      </Container>
    </article>
  );
}
