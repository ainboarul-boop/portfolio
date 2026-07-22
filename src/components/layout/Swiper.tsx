"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Navigation,
    Pagination,
    EffectCoverflow,
} from "swiper/modules";

import { images as imageLibrary } from "@/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

type ImageKey = keyof typeof imageLibrary;

interface SwiperComponentProps {
    imageKeys?: ImageKey[];
    alts?: string[];
    slidesPerView?: number;
    spaceBetween?: number;
    autoplay?: boolean;
    delay?: number;
    loop?: boolean;
    navigation?: boolean;
    pagination?: boolean;
}

export default function SwiperComponent({
    imageKeys = [],
    alts = [],
    slidesPerView = 3,
    spaceBetween = 24,
    autoplay = true,
    delay = 3000,
    loop = true,
    navigation = false,
    pagination = true,
}: SwiperComponentProps) {
    if (!imageKeys.length) return null;

    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                loop={loop}
                navigation={navigation}
                // pagination={pagination ? { clickable: true } : false}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}

                autoplay={
                    autoplay
                        ? {
                            delay,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }
                        : false
                }
                effect="coverflow"
                centeredSlides
                speed={900}
                grabCursor
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 120,
                    modifier: 2,
                    slideShadows: false,
                    scale: 0.9,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView,
                    },
                }}
            >
                {imageKeys.map((key, index) => (
                    <SwiperSlide key={key}>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src={imageLibrary[key] as string}
                                alt={alts[index] ?? key}
                                width={1600}
                                height={900}
                                className="aspect-[16/9] w-full object-cover transition duration-500 hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination mt-6 flex justify-center" />
        </>
    );
}