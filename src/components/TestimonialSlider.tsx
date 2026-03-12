"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { testimonials } from "@/data/services";

interface TestimonialSliderProps {
  items?: typeof testimonials;
  title?: string;
  subtitle?: string;
  bgClass?: string;
}

const TestimonialSlider = ({ 
  items, 
  title = "What Our Clients Say", 
  subtitle = "Trusted by hundreds of homeowners and businesses across Dubai",
  bgClass = "bg-background"
}: TestimonialSliderProps = {}) => {
  const dataToUse = items || testimonials;

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-3">{title}</h2>
        {subtitle && (
          <p className="text-center text-muted-foreground mb-10">
            {subtitle}
          </p>
        )}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {dataToUse.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground flex-1 mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
