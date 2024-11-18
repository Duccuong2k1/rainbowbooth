"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import Image from "next/image"
import { Carousel1, Carousel2, Carousel3, CarouselImg360 } from "@/constants/event"
import BgLeft from "@/public/bg-left.jpg"

import HastTag from "@/components/HastTag"
import { useScreen } from "@/hooks/useScreen"
import { cn } from "@/lib/utils"

export default function BannerSlider() {
  const isLg = useScreen("lg")
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-start">
      <div
        className={cn(
          " background min-h-screen flex flex-col items-center justify-center lg:pl-[4rem] px-4  lg:px-20 ",
          isLg && "sticky top-0 ",
        )}
        // style={{
        //   backgroundImage: `url(${BgLeft.src})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
      >
        <h1
          className="text-center font-sour-gummy lg:leading-[80px] text-[38px] md:text-[50px] text-border font-semibold lg:px-4 "
          data-aos="zoom-in"
        >
          colour your moments
        </h1>
        <div className="px-4 text-center my-6 flex flex-col items-center gap-3" data-aos="zoom-in">
          <span className="uppercase text-2xl font-semibold text-white">Photobooth</span>
          <span className="text-white text-lg font-semibold italic"> Số 1 việt nam</span>
        </div>
        <p
          className="font-sour-gummy lg:text-lg text-md text-white text-center w-full lg:w-[80%] italic"
          data-aos="zoom-in-down"
        >
          Dịch vụ photo booth độc đáo mang đến cho bạn trải nghiệm chụp ảnh lấy liền sôi động và đầy màu sắc. Với thiết
          kế độc đáo, được làm từ gỗ tự nhiên kết hợp với công nghệ hiện đại, chúng tôi cam kết sẽ cho ra những tấm ảnh
          hết sức vui nhộn và đáng nhớ dành cho bạn!
        </p>
      </div>

      <div className="">
        {/* <BannerListColumn /> */}
        <BannerBoxRightSlide />
      </div>
    </section>
  )
}

function BannerListColumn() {
  return (
    <div className="flex flex-col  w-full">
      <div className="bg-[#f2c40a] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
        <div className="relative max-h-[400px] max-w-[400px]">
          <HastTag bgColor={"bg-black"} textColor="text-[#feff63]" label="Photo booth" />{" "}
          <Image
            src={Carousel1}
            width={400}
            height={400}
            alt="Chào mừng bạn đến với Rainbow Booth"
            className="max-h-[400px] border-2 border-white"
            loading="lazy"
          />
          <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
            <span className=" font-semibold ">Origin Booth</span>{" "}
            <span className="">Our most versatile Photo Booth</span>
          </div>
        </div>
      </div>
      <div className="bg-[#e14a2c] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
        <div className="relative  max-h-[400px] max-w-[400px]">
          <HastTag bgColor={"bg-[#f6ff54]"} textColor=" text-black " label="360 Coming soon!" />
          <Image
            src={CarouselImg360}
            width={400}
            height={400}
            alt=" Rainbow Booth 360"
            loading="lazy"
            className="max-h-[400px] border-2 border-white"
          />

          <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
            <span className=" font-semibold text-white">
              360 with
              <span className="text-gradient"> Rainbow</span>
            </span>{" "}
            <span className="">Our most versatile Photo Booth</span>
          </div>
        </div>
      </div>

      <div className="bg-[#ffb3b3] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
        <div className="relative  max-h-[400px] max-w-[400px]">
          <HastTag bgColor={"bg-[#00bbdc]"} textColor="text-white" label="Rainbow booth" />{" "}
          <Image
            src={Carousel2}
            width={400}
            height={400}
            alt="Chào mừng bạn đến với Rainbow Booth"
            loading="lazy"
            className="max-h-[400px] border-2 border-white"
          />
          <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
            <span className=" font-semibold ">Origin Booth</span>{" "}
            <span className="">Our most versatile Photo Booth</span>
          </div>
        </div>
      </div>

      <div className="bg-[#b38dff] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
        <div className="relative  max-h-[400px] max-w-[400px]">
          <HastTag bgColor={"bg-[#d31f7e]"} textColor="text-white" label="Origin Booth" />

          <Image
            src={Carousel3}
            width={400}
            height={400}
            alt="Chào mừng bạn đến với Rainbow Booth"
            data-aos="zoom-in"
            className="border-2 border-white"
            // loading="lazy"
          />
          <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
            <span className=" font-semibold ">Origin Booth</span>{" "}
            <span className="">Our most versatile Photo Booth</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function BannerBoxRightSlide() {
  const isLg = useScreen("lg")

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      mousewheel={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {/* <SwiperSlide className="">
        <div className="bg-[#1a1a1a] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative">
            <HastTag bgColor={"bg-[#d31f7e]"} textColor="text-white" label="Pro booth" />
            <Image
              src={BnrImg1}
              width={800}
              height={500}
              alt="Chào mừng bạn đến với Rainbow Booth"
              data-aos="zoom-in"
              // className="max-w-[800px]"
              // loading="lazy"
            />
            <div className="flex gap-2 flex-row items-center justify-end my-4 flex-wrap">
              <span className="text-gradient font-semibold ">Pro Booth</span>{" "}
              <span className="text-white">Our most versatile Photo Booth</span>
            </div>
          </div>
        </div>
      </SwiperSlide> */}

      <SwiperSlide className="">
        <div className="bg-[#f2c40a] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative max-h-[400px] max-w-[400px]">
            <HastTag bgColor={"bg-black"} textColor="text-[#feff63]" label="Original booth" />{" "}
            <Image
              src={Carousel1}
              width={400}
              height={400}
              alt="Chào mừng bạn đến với Rainbow Booth"
              className="max-h-[400px] border-2 border-white"
              loading="lazy"
            />
            <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
              <span className=" font-semibold text-gradient">Original booth booth</span>{" "}
              {/* <span className="">Our most versatile Original booth Booth</span> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="bg-[#e14a2c] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative  max-h-[400px] max-w-[400px]">
            <HastTag bgColor={"bg-[#f6ff54]"} textColor=" text-black " label="360 Coming soon!" />
            <Image
              src={CarouselImg360}
              width={400}
              height={400}
              alt=" Rainbow Booth 360"
              loading="lazy"
              className="max-h-[400px] border-2 border-white"
            />

            <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
              <span className=" font-semibold text-white">
                360 with
                <span className="text-gradient"> Rainbow</span>
              </span>{" "}
              <span className="">Our most versatile Photo Booth</span>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="">
        <div className="bg-[#ffb3b3] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative  max-h-[400px] max-w-[400px]">
            <HastTag bgColor={"bg-[#00bbdc]"} textColor="text-white" label="Original booth" />{" "}
            <Image
              src={Carousel2}
              width={400}
              height={400}
              alt="Chào mừng bạn đến với Original Booth"
              loading="lazy"
              className="max-h-[400px] border-2 border-white"
            />
            <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
              <span className=" font-semibold text-gradient">Original booth</span>{" "}
              <span className="">Our most versatile Original Booth</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="bg-[#b38dff] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative  max-h-[400px] max-w-[400px]">
            <HastTag bgColor={"bg-[#d31f7e]"} textColor="text-white" label="Origin Booth" />

            <Image
              src={Carousel3}
              width={400}
              height={400}
              alt="Chào mừng bạn đến với Rainbow Booth"
              data-aos="zoom-in"
              className="border-2 border-white"
              // loading="lazy"
            />
            <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
              <span className=" font-semibold text-gradient">Origin Booth</span>{" "}
              <span className="">Our most versatile Photo Booth</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
