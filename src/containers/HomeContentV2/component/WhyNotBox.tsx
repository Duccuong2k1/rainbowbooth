"use client"
import TitleWrapper from "@/components/TitleWrapper"
import { useScreen } from "@/hooks/useScreen"
import { cn } from "@/lib/utils"
import React from "react"

type Props = {}

export default function WhyNotBox({}: Props) {
  const isLg = useScreen("lg")
  return (
    <div className="gradient-background">
      <div className="container py-20">
        <TitleWrapper
          bgColor="bg-[#feff63]"
          label="why hire a photo booth?"
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
    </div>
  )
}
