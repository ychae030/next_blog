import Profile from "@/components/about/Profile";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="min-h-screen">
      <Profile />
      <a href="https://github.com/ychae030" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
    </section>
  );
}
