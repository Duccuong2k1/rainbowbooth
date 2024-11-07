"use client"
import React from "react"
import "swiper/css"
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from "swiper/react"

import { Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"

export default function BannerSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[900px]"
      >
        <SwiperSlide className="">
          <div className="flex flex-row justify-center gap-8 items-center relative  bg-no-repeat bg-[url('https://rainbowbooth.com.vn/media/intro/BMM_7793.jpg')] bg-center bg-cover h-full w-full">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 gap-8 items-center container">
              <div className="flex flex-col items-start justify-start gap-8">
                <h2
                  className="lg:text-5xl text-4xl font-semibold leading-10 lg:leading-[60px] text-white"
                  data-aos="zoom-in-down"
                >
                  Chào mừng bạn đến với Rainbow Booth
                </h2>
                <p className="lg:text-lg text-md text-white" data-aos="zoom-in-down">
                  Dịch vụ photo booth độc đáo mang đến cho bạn trải nghiệm chụp ảnh lấy liền sôi động và đầy màu sắc.
                  Với thiết kế độc đáo, được làm từ gỗ tự nhiên kết hợp với công nghệ hiện đại, chúng tôi cam kết sẽ cho
                  ra những tấm ảnh hết sức vui nhộn và đáng nhớ dành cho bạn!
                </p>
              </div>
              <Image
                src={"https://rainbowbooth.com.vn/media/intro/BMM_7793.jpg"}
                width={700}
                height={800}
                alt="Chào mừng bạn đến với Rainbow Booth"
                data-aos="zoom-in"
                // loading="lazy"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex relative flex-row justify-center gap-8 items-center  bg-no-repeat bg-[url('https://rainbowbooth.com.vn/media/intro/BMM_7809.jpg')] bg-center bg-cover h-full w-full">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="grid relative z-10 grid-cols-1 lg:grid-cols-2 gap-8 items-center container">
              <Image
                src={"https://rainbowbooth.com.vn/media/intro/BMM_7809.jpg"}
                width={700}
                height={800}
                alt="CRainbow Booth không chỉ là một dịch vụ chụp ảnh"
                data-aos="zoom-in"
              />
              <div className="flex flex-col items-start justify-start gap-8">
                <h2 className="lg:text-5xl text-4xl font-semibold leading-10 lg:leading-[60px] text-white">
                  CRainbow Booth không chỉ là một dịch vụ chụp ảnh
                </h2>
                <p className="lg:text-lg text-md text-white">
                  Đó còn là một trải nghiệm - nơi mà mỗi bức ảnh chụp được là một câu chuyện riêng biệt, mỗi màu sắc
                  trong ảnh là một phần không thể thiếu trong câu chuyện đó. Chúng tôi phục vụ tại các sự kiện đa dạng
                  từ tiệc cưới, tiệc sinh nhật, tiệc công ty cho đến những buổi họp mặt gia đình,... luôn sẵn sàng thích
                  nghi để phù hợp với không khí và yêu cầu riêng của từng sự kiện
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
