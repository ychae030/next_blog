import React from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import Container from "@/components/common/Container";
import { PostType } from "@/service/posts";

type Props = {
  post: PostType;
};
export default function Metadata({
  post: { path, title, description, date },
}: Props) {
  return (
    <div className="relative mb-10 max-h-40 w-full">
      <Image
        className="max-h-40 w-full object-cover"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Container>
          <div className="text-white">
            <h1 className="mb-3 inline-block text-3xl">{title}</h1>
            <div className="flex justify-between">
              <p>{description}</p>
              <span className="flex flex-row-reverse items-center gap-2 text-sm text-gray-300">
                {date.toString()}
                <CiCalendar />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
