import { PostType } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardItem({
  title,
  date,
  category,
  description,
  path,
}: Omit<PostType, "featured">) {
  return (
    <Link href={`posts/${path}`}>
      <article className="border border-foreground">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="p-5">
          <h4 className="mb-2 text-lg">{title}</h4>
          <p className="text-overflow mb-2">{description}</p>
          <div className="flex justify-between text-sm">
            <span>{category}</span>
            <span>{date.toString()}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
