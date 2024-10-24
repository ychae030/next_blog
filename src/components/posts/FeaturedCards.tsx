import React from "react";
import CardItem from "./CardItem";
import { getPosts } from "@/service/posts";
import styles from "@/styles/FeaturedCards.module.css";

export default async function FeaturedCards() {
  const posts = await getPosts();
  const featuredPosts = posts.filter(({ featured }) => featured).slice(-4);

  return (
    <section>
      <h3 className="mb-3">Featured Posts</h3>
      <ul className={`${styles.posts} grid grid-cols-4`}>
        {featuredPosts.map(({ title, date, category, description, path }) => (
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
    </section>
  );
}
