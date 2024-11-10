"use client"
import React from "react"
import Link from "next/link"

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import Image from "next/image"
import { BnrImg1, BnrImg2, BnrImg3, BnrImg5 } from "@/constants/event"

import HastTag from "@/components/HastTag"
import { useScreen } from "@/hooks/useScreen"

export default function BannerSlider() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="background min-h-screen flex flex-col items-center justify-center lg:pl-[4rem] px-4  lg:px-20 ">
        <h1
          className="text-center lg:leading-[120px] text-[50px] text-border font-semibold px-4 lg:text-nowrap "
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
            <HastTag bgColor={"bg-black"} textColor="text-[#feff63]" label="Photo booth" />{" "}
            <Image
              src={BnrImg3}
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
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="bg-[#e14a2c] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative  max-h-[400px] max-w-[400px]">
            <HastTag bgColor={"bg-[#f6ff54]"} textColor=" text-black " label="360 Coming soon!" />
            <iframe
              width={isLg ? "400" : "340"}
              height={isLg ? "400" : "315"}
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

      <SwiperSlide className="">
        <div className="bg-[#aec581] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative  max-h-[400px] max-w-[400px]">
            <HastTag bgColor={"bg-[#00bbdc]"} textColor="text-white" label="Rainbow booth" />{" "}
            <Image
              src={BnrImg5}
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
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="bg-[#2d90cf] min-h-screen px-[1rem] lg:px-[4rem] flex flex-row items-center justify-center">
          <div className="relative  max-h-[400px] max-w-[400px]">
            <HastTag bgColor={"bg-[#d31f7e]"} textColor="text-white" label="Origin Booth" />

            <Image
              src={BnrImg2}
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
      </SwiperSlide>
    </Swiper>
  )
}
