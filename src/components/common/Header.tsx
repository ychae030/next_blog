"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";
import Container from "./Container";
import ham from "@public/images/hamburger.png";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b border-foreground">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <h1 className="flex h-full items-center font-[family-name:var(--font-changwon-bold)] text-2xl lg:border-r lg:border-foreground lg:pr-4">
            Chaewon&#39;s Blog
          </h1>
          <nav className="flex h-full items-center lg:border-l lg:border-foreground lg:pl-4">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden"
            >
              <Image height={40} width={40} src={ham} alt="모바일 메뉴 버튼" />
            </button>
            <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
              <Navigation />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
