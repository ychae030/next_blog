import Container from "@/components/common/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "채원에게 메일 보내기",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
