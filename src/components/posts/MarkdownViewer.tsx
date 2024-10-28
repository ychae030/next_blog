import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};
export default function MarkdownViewer({ content }: Props) {
  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
}
