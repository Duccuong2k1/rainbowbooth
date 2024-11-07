import { BlogImg1, BlogImg2, BlogImg3 } from "@/constants/event"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"

export default function PostList() {
  return (
    <div className="container my-10">
      <div className="text-center">
        <div className="text-4xl font-semibold text-font">Read Our Blog</div>
        <p className="text-gray-500 mt-4 w-full lg:w-[50%] mx-auto">
          {" "}
          We love photography and travel for meeting new beautiful people all over the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-start py-10">
        <BlogItem
          img={BlogImg1}
          title="Cười thả ga ảnh đậm chất"
          desc={`Xin chào các ngoan xinh iu của nhà Rainbow Booth. Sự xuất hiện của Rainbow Booth ở các bữa tiệc của bạn không chỉ để chụp ảnh, mà còn là dịp để Rainbow đồng hành “bắt” trọn từng giây phút vui vẻ của bạn và các khách mời tại bữa tiệc nữa đó!`}
        />
        <BlogItem
          img={BlogImg2}
          title="Halloween vibe"
          desc={`Mùa Halloween đang đến gần, và Rainbow Booth đã sẵn sàng để biến bữa tiệc của bạn thành một siêu phẩm`}
        />
        <BlogItem
          img={BlogImg3}
          title="Khám Phá 17 Backdrops Độc Đáo "
          desc={`Khám Phá 17 Backdrops Độc Đáo Tại Rainbow Booth! Tại Rainbow Booth, chúng tôi cung cấp 17 backdrop tuyệt đẹp, giúp bức ảnh của bạn trở nên nổi bật và ấn tượng.`}
        />
      </div>
    </div>
  )
}

function BlogItem({ img, title, desc }: { img: string | StaticImageData; title: string; desc?: string }) {
  return (
    <Link href={"https://www.facebook.com/RainbowBoothVN"} data-aos="zoom-in-up">
      <Image src={img} height={80} width={500} alt={title} className="hover:scale-105 rounded-md transition-all" />
      <div className="capitalize text-xl my-4 font-semibold text-center">{title}</div>
      <p className="text-center mt-4 text-gray-500 line-clamp-3">{desc}</p>
    </Link>
  )
}
