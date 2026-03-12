"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data/services";

interface Slide {
  image: any;
  title: string;
  subtitle: string;
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="h-[500px] md:h-[600px]"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-full">
            <Image 
              src={slide.image} 
              alt={slide.title} 
              fill 
              sizes="100vw"
              className="object-cover" 
              priority={i === 0} 
            />
            <div className="absolute inset-0 bg-secondary/60" />
            <div className="absolute inset-0 flex items-center">
              <div className="container-max px-4 md:px-8">
                {i === 0 ? (
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-primary-foreground max-w-3xl mb-4 leading-tight">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-primary-foreground max-w-3xl mb-4 leading-tight">
                    {slide.title}
                  </h2>
                )}
                <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-bold btn-hover"
                  >
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground font-heading font-bold backdrop-blur-sm btn-hover border border-primary-foreground/30"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
