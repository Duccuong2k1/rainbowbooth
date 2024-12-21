import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BsFillChatSquareDotsFill } from "react-icons/bs"
import { IconFacebook, IconInstagram, IconTikTok } from "../../constants/assets-local"

type Props = {}

export default function Social({}: Props) {
  return (
    <div
      className="flex fixed items-center lg:right-[60px] bottom-6 right-6 lg:bottom-[40px] z-30 flex-col  justify-center gap-3 text-white"
      data-aos="zoom-in"
    >
      <Link
        href={"#contact"}
        className="relative rounded-full flex flex-col border-csYellow  items-center text-white text-center py-2.5 px-[14px] border gap-1 bg-black animate-border "
      >
        <span className="absolute inset-0 rounded-full border-2 border-csYellow opacity-80 animate-ping z-[-1]"></span>

        <span className="text-xl ">
          <BsFillChatSquareDotsFill />
        </span>
        <span className="text-[8px] font-semibold   animate-bounce">Liên hệ</span>
      </Link>
      <Link href={"https://www.facebook.com/RainbowBoothVN"}>
        <Image
          src={IconFacebook}
          loading="lazy"
          width={45}
          height={45}
          alt="Icon tiktok"
          className="hover:scale-105 transition-all"
        />
      </Link>

      <Link href={"/"}>
        {/* <FaTiktok className="animate-pulse" /> */}
        <Image
          src={IconTikTok}
          loading="lazy"
          width={45}
          height={45}
          alt="Icon tiktok"
          className="hover:scale-105 transition-all"
        />
      </Link>
      <Link href={"https://www.instagram.com/event.rainbowbooth/"}>
        {/* <RiInstagramFill className="animate-pulse" /> */}
        <Image
          src={IconInstagram}
          loading="lazy"
          width={40}
          height={40}
          alt="Icon tiktok"
          className="hover:scale-105 transition-all"
        />
      </Link>
    </div>
  )
}
