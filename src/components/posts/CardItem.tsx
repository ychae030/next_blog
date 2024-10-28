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
    <Link href={`posts/${path}`} className="group">
      <article className="overflow-hidden border border-foreground">
        <Image
          className="w-full duration-100 group-hover:scale-x-110"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="p-5">
          <h4 className="mb-2 truncate text-lg group-hover:bg-point">
            {title}
          </h4>
          <p className="mb-2 truncate">{description}</p>
          <div className="flex justify-between text-sm">
            <span>{category}</span>
            <span>{date.toString()}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
