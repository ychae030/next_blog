import MarkdownViewer from "@/components/posts/MarkdownViewer";
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
  const { content } = post;
  return (
    <div>
      <MarkdownViewer content={content} />
    </div>
  );
}
