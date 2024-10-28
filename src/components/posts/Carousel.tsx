"use client";
import React, { useState } from "react";
import { PostType } from "@/service/posts";
import CardItme from "./CardItem";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  posts: PostType[];
};

export default function Carousel({ posts }: Props) {
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
  const BUTTON_CLASS = "absolute top-1/2 -translate-y-1/2";
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={-1}
        slidesPerView={1}
        onSwiper={(e) => setSwiper(e)}
        breakpoints={{
          640: {
            slidesPerView: 1, // sm
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2, // md
            spaceBetween: -1,
          },
          1024: {
            slidesPerView: 3, // lg
            spaceBetween: -1,
          },
          1280: {
            slidesPerView: 4, // xl
            spaceBetween: -1,
          },
        }}
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
      <div className="text-4xl">
        <button
          className={`${isBeginning ? "hidden" : "text-foreground"} ${BUTTON_CLASS} -left-10`}
          onClick={handlePrev}
        >
          <IoIosArrowRoundBack />
        </button>
        <button
          className={`${isEnd ? "hidden" : "text-foreground"} ${BUTTON_CLASS} -right-10`}
          onClick={handleNext}
        >
          <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
}
