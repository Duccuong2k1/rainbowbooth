import TitleWrapper from "@/components/TitleWrapper"
import React from "react"

type Props = {}

export default function WhyNotBox({}: Props) {
  return (
    <div className="gradient-background">
      <div className="container py-20">
        <TitleWrapper bgColor="bg-[#feff63]" label="why hire a photo booth?" textColor="text-black" />
        <p
          className={"text-cs-white  my-10"}
        >{` Dịch vụ photo booth độc đáo mang đến cho bạn trải nghiệm chụp ảnh lấy liền sôi động và đầy màu sắc.
                  Với thiết kế độc đáo, được làm từ gỗ tự nhiên kết hợp với công nghệ hiện đại, chúng tôi cam kết sẽ cho
                  ra những tấm ảnh hết sức vui nhộn và đáng nhớ dành cho bạn!
                    Đó còn là một trải nghiệm - nơi mà mỗi bức ảnh chụp được là một câu chuyện riêng biệt, mỗi màu sắc
                  trong ảnh là một phần không thể thiếu trong câu chuyện đó. Chúng tôi phục vụ tại các sự kiện đa dạng
                  từ tiệc cưới, tiệc sinh nhật, tiệc công ty cho đến những buổi họp mặt gia đình,... luôn sẵn sàng thích
                  nghi để phù hợp với không khí và yêu cầu riêng của từng sự kiện.
                  `}</p>
      </div>
    </div>
  )
}
