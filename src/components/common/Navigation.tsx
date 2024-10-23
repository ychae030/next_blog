import Link from "next/link";
import React from "react";
import styles from "@/styles/Navigation.module.css";

export default function Navigation() {
  const pages = ["home", "about", "posts", "contact"];

  return (
    <ul className={styles.navigation}>
      {pages.map((page, i) => {
        const pagePath = page === "home" ? "/" : `${page}`;
        return (
          <li key={i} className="gpa py-2">
            <Link href={pagePath}>{page.toUpperCase()}</Link>
          </li>
        );
      })}
    </ul>
  );
}
