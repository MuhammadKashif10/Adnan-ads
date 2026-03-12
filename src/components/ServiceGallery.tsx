"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function ServiceGallery({ images, title }: { images: string[], title: string }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="rounded-xl overflow-hidden pb-10"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="aspect-video overflow-hidden group relative">
            <Image 
              src={img as any} 
              alt={`${title} gallery ${i + 1}`} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
