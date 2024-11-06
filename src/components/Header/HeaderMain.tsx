import Link from "next/link"
import React from "react"
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

type Props = {}

export default function HeaderMain({}: Props) {
  return (
    <section className="container py-4 grid grid-cols-3 items-center gap-8">
      <div className="flex-row hidden lg:flex items-center justify-start gap-6">
        <MenuItem label="Trang chủ" href="/" />
        <MenuItem label=" Giới thiệu" href="/" />
        <MenuItem label="Sự kiện" href="/" />
        <MenuItem label="Liên hệ" href="/" />
      </div>
      <Link href={"/"} className="flex flex-col items-center ">
        <div className="font-semibold text-6xl">RB</div>
        <div>Rainbow Booth</div>
      </Link>
      <div className="lg:flex hidden flex-row items-center justify-end gap-3">
        <Link href={"/"} className="text-xl hover:text-red-500">
          <FaYoutube />
        </Link>
        <Link href={"/"} className="text-xl hover:text-blue-500">
          <FaFacebookF />
        </Link>
        <Link href={"/"} className="text-xl hover:text-orange-500">
          <RiInstagramFill />
        </Link>
        <Link href={"/"} className="text-xl hover:text-blue-500">
          <FaTwitter />
        </Link>
      </div>
    </section>
  )
}

function MenuItem({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href || "/"} className="font-medium text-lg hover:text-orange-500">
      {label}
    </Link>
  )
}
