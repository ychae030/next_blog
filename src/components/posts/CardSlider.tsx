"use client";
import React, { useState } from "react";
import { PostType } from "@/service/posts";
import CardItme from "./CardItem";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CardSliderProps = {
  posts: PostType[];
};

export default function CardSlider({ posts }: CardSliderProps) {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState<boolean | undefined>(true);
  const [isEnd, setIsEnd] = useState<boolean | undefined>(false);

  const handlePrev = () => {
    swiper?.slidePrev();
    setIsBeginning(swiper?.isBeginning);
    setIsEnd(false);
  };
  const handleNext = () => {
    swiper?.slideNext();
    setIsEnd(swiper?.isEnd);
    setIsBeginning(false);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={-1}
        slidesPerView={4}
        onSwiper={(e) => setSwiper(e)}
      >
        {posts.map(({ title, date, category, description, path }) => (
          <SwiperSlide key={title}>
            <CardItme
              title={title}
              date={date}
              category={category}
              description={description}
              path={path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={isBeginning ? "text-red-400" : "text-foreground"}
        onClick={handlePrev}
      >
        이전
      </button>
      <button
        className={isEnd ? "text-red-400" : "text-foreground"}
        onClick={handleNext}
      >
        다음
      </button>
    </>
  );
}
