import Container from "@/components/common/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description: "채원 소개",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
