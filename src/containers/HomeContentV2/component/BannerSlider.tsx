"use client"
import React from "react"
import Link from "next/link"

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import Image from "next/image"
import { BnrImg1, BnrImg2 } from "@/constants/event"

import HastTag from "@/components/HastTag"
import { useScreen } from "@/hooks/useScreen"

export default function BannerSlider() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="background min-h-screen flex flex-col items-center justify-center lg:pl-[4rem] px-4  lg:px-20 ">
        <h1
          className="text-center lg:leading-[120px] text-[50px] text-border font-semibold px-4 text-nowrap "
          data-aos="zoom-in"
        >
          Photo booth
        </h1>
        <div className="text-[30px] text-white font-semibold px-4 text-center my-6 uppercase" data-aos="zoom-in">
          classic. instant prints.
        </div>
        <p className="lg:text-lg text-md text-white text-center w-full lg:w-[80%]" data-aos="zoom-in-down">
          Dịch vụ photo booth độc đáo mang đến cho bạn trải nghiệm chụp ảnh lấy liền sôi động và đầy màu sắc. Với thiết
          kế độc đáo, được làm từ gỗ tự nhiên kết hợp với công nghệ hiện đại, chúng tôi cam kết sẽ cho ra những tấm ảnh
          hết sức vui nhộn và đáng nhớ dành cho bạn!
        </p>
        <div className="flex  flex-row items-start justify-start gap-3 text-white mt-8 lg:mt-24" data-aos="zoom-in">
          <Link href={"/"} className="text-xl text-red-500 bg-white p-3">
            <FaYoutube />
          </Link>
          <Link href={"https://www.facebook.com/RainbowBoothVN"} className="text-xl bg-white p-3  text-blue-500">
            <FaFacebookF />
          </Link>
          <Link href={"https://www.instagram.com/event.rainbowbooth/"} className="text-xl bg-white p-3  text-pink-700">
            <RiInstagramFill />
          </Link>
          <Link href={"/"} className="text-xl bg-white p-3 text-blue-500">
            <FaTwitter />
          </Link>
        </div>
      </div>

      <div className="">
        <BannerBoxRightSlide />
      </div>
    </section>
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
        delay: 3500,
        disableOnInteraction: false,
      }}
      mousewheel={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="">
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
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="bg-[#f6ff54] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative">
            <HastTag bgColor={"bg-black"} textColor=" text-[#f6ff54] " label="  Origin Booth" />
            <Image
              src={BnrImg2}
              width={800}
              height={500}
              alt="Chào mừng bạn đến với Rainbow Booth"
              data-aos="zoom-in"
              // loading="lazy"
            />
            <div className="flex gap-2 flex-row items-center justify-end my-4 text-[#1a1a1a] flex-wrap">
              <span className=" font-semibold ">Origin Booth</span>{" "}
              <span className="">Our most versatile Photo Booth</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="bg-[#e14a2c] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative">
            <HastTag bgColor={"bg-[#f6ff54]"} textColor=" text-black " label="360 Coming soon!" />
            <iframe
              width={isLg ? "560" : "340"}
              height="315"
              src="https://www.youtube.com/embed/oCD0AAUEa2A?si=wKhTiRiNBi6nKYzh"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
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
    </Swiper>
  )
}
