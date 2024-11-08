"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Grid } from "swiper/modules"
import Image from "next/image"
import {
  BnrImg2,
  BnrImg5,
  EventImg4,
  EventImg5,
  EventImg6,
  EventImg8,
  Img1,
  Img2,
  Img3,
  Img5,
  Img6,
  Img7,
} from "@/constants/event"

import TitleWrapper from "@/components/TitleWrapper"
export default function EventsParticipation() {
  return (
    <section className="h-full py-20 container">
      <div className="grid grid-cols-2 gap-10 items-end py-6 mb-6">
        <div className="flex flex-col gap-1">
          <TitleWrapper
            bgColor={"bg-[#8b0688]"}
            textColor="text-gradient"
            label="Rainbow Booth"
            className="w-1/3 text-lg"
          />
          <TitleWrapper bgColor={"bg-[#8b0688]"} textColor="text-white" label="Events đã góp mặt" className="w-1/2" />
        </div>
        <div>
          <p className="text-[#a2ecdd] uppercase text-lg font-semibold">{`“It’s one thing to make a picture of what a person looks like, it’s another thing to make a potrait of who they are.”`}</p>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-row-2 gap-3">
            <div className="grid grid-cols-3 gap-3">
              <Image
                src={EventImg4}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
              <Image
                src={EventImg5}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
              <Image
                src={EventImg6}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Image
                src={Img1}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
              <Image
                src={EventImg8}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
              <Image
                src={Img2}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-row-2 gap-3">
            <div className="grid grid-cols-3 gap-3">
              <Image
                src={Img7}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
              <Image
                src={Img1}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
              <Image
                src={Img3}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Image
                src={BnrImg2}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
              <Image
                src={Img5}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
              <Image
                src={Img6}
                width={500}
                height={300}
                alt="Chào mừng bạn đến với Rainbow Booth"
                // loading="lazy"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
