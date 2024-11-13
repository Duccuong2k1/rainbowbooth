"use client"
import HastTag from "@/components/HastTag"
import TitleWrapper from "@/components/TitleWrapper"
import { EventImg9 } from "@/constants/event"
import { useScreen } from "@/hooks/useScreen"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

export default function WhyNotBox({}: Props) {
  const isLg = useScreen("lg")
  return (
    <div className="gradient-background">
      <div className="container py-20 flex flex-col  lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2">
          <TitleWrapper
            bgColor="bg-[#feff63]"
            label="Tại sao nên thuê rainbow booth?"
            textColor="text-black"
            className="text-lg mb-10"
          />
          <p
            className={cn("text-cs-white font-semibold", isLg ? "text-cs-white" : "text-white")}
            data-aos="zoom-in"
          >{` Dịch vụ photo booth độc đáo mang đến cho bạn trải nghiệm chụp ảnh lấy liền sôi động và đầy màu sắc.
                  Với thiết kế độc đáo, được làm từ gỗ tự nhiên kết hợp với công nghệ hiện đại, chúng tôi cam kết sẽ cho
                  ra những tấm ảnh hết sức vui nhộn và đáng nhớ dành cho bạn!
                   
                  `}</p>
          <p
            className={cn("text-cs-white font-semibold", isLg ? "text-cs-white" : "text-white")}
            data-aos="zoom-in"
          >{` Đó còn là một trải nghiệm - nơi mà mỗi bức ảnh chụp được là một câu chuyện riêng biệt, mỗi màu sắc
                  trong ảnh là một phần không thể thiếu trong câu chuyện đó. Chúng tôi phục vụ tại các sự kiện đa dạng
                  từ tiệc cưới, tiệc sinh nhật, tiệc công ty cho đến những buổi họp mặt gia đình,... luôn sẵn sàng thích
                  nghi để phù hợp với không khí và yêu cầu riêng của từng sự kiện.
                  `}</p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-14 lg:mt-0">
          <Link href={"https://www.facebook.com/RainbowBoothVN"} className="relative" data-aos="zoom-in">
            <HastTag bgColor={"bg-[#e14a2c]"} textColor="text-white" label="Rainbow at Fpt" />{" "}
            <Image
              src={EventImg9}
              width={500}
              height={300}
              alt="Chào mừng bạn đến với Rainbow Booth"
              className="max-h-[500px] border-2 border-white"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
