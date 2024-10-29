import React from "react";
import { getPostData } from "@/service/posts";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    path: string;
  }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;

  const { title, description } = await getPostData(path);
  return {
    title,
    description,
  };
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
