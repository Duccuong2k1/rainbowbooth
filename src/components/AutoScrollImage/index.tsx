"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import {
  BnrImg2,
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
import Image from "next/image"
import { useScreen } from "@/hooks/useScreen"
import Slider from "react-slick";

const images = [EventImg4, EventImg5, EventImg6, EventImg8, Img1, Img2, Img3, Img5, Img6, Img7]

const AutoScrollImages: React.FC = () => {
  const isLg = useScreen("lg")
  const isMd = useScreen("md")

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: isLg ? 4 : isMd ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <Image
              src={img}
              width={500}
              height={300}
              alt={`Events Rainbow Booth tham gia ${idx + 1}`}
              loading="lazy"
              data-aos="zoom-in"
            />
          </div>
        ))}
      </Slider>
    </div>
    // <Swiper
    //   slidesPerView={isLg ? 4 : isMd ? 2 : 1}
    //   // spaceBetween={30}

    //   loop
    //   autoplay={{
    //     delay: 1000,
    //     disableOnInteraction: false,
    //   }}
    //   modules={[Autoplay]}
    //   className=""
    // >
    //   {images.map((img, idx) => (
    //     <SwiperSlide key={idx}>
    //       <Image
    //         src={img}
    //         width={500}
    //         height={300}
    //         alt={`Events Rainbow Booth tham gia ${idx + 1}`}
    //         loading="lazy"
    //         data-aos="zoom-in"
    //       />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  )
}
export default AutoScrollImages
