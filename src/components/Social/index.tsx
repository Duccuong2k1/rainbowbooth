import { IconFace, IconInstag, IconTiktok } from "@/constants/event"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

type Props = {}

export default function Social({}: Props) {
  return (
    <div
      className="flex fixed lg:right-[60px] bottom-6 right-6 lg:bottom-[40px] z-30 flex-col items-start justify-center gap-3 text-white"
      data-aos="zoom-in"
    >
      <Link href={"https://www.facebook.com/RainbowBoothVN"}>
        {/* <FaFacebookF className="animate-pulse" /> */}
        <Image
          src={IconFace}
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
          src={IconTiktok}
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
          src={IconInstag}
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
