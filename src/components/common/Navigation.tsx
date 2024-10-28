import Link from "next/link";
import React from "react";
import styles from "@/styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/">HOME</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/posts">POSTS</Link>
      <Link href="/contact">CONTACT</Link>
    </nav>
  );
}
