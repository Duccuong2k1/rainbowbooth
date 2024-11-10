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
      <Link href={"/"} className="text-xl text-black bg-white p-3 ">
        <FaTiktok className="animate-pulse" />
      </Link>
      <Link href={"https://www.facebook.com/RainbowBoothVN"} className="text-xl bg-white p-3  text-blue-500">
        <FaFacebookF className="animate-pulse" />
      </Link>
      <Link href={"https://www.instagram.com/event.rainbowbooth/"} className="text-xl bg-white p-3  text-[#ff2145]">
        <RiInstagramFill className="animate-pulse" />
      </Link>
    </div>
  )
}
