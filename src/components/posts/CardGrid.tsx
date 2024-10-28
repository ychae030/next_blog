import React from "react";
import CardItem from "./CardItem";
import { PostType } from "@/service/posts";
import styles from "@/styles/CardGrid.module.css";

type Props = {
  posts: PostType[];
  gap?: string;
};

export default function CardGrid({ posts, gap = "gap-y-0" }: Props) {
  return (
    <ul
      className={`${styles.posts} ${gap} grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
    >
      {posts.map(({ title, date, category, description, path }) => (
        <li key={title}>
          <CardItem
            title={title}
            date={date}
            category={category}
            description={description}
            path={path}
          />
        </li>
      ))}
    </ul>
  );
}
