"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import LogoDefault from "@/public/assets/imgs/logo-rainbow.png"
import { MENU_MAIN } from "@/constants/default"
import { useScreen } from "@/hooks/useScreen"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { Sidebar } from "./Sidebar"

export default function HeaderMain() {
  const isLg = useScreen("lg")
  if (!isLg) return <HeaderMobile />
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
      <div className="flex-row hidden lg:flex items-center justify-start gap-6">
        {MENU_MAIN.map((menu, idx) => (
          <MenuItem label={menu.label} href={menu.href} key={idx} />
        ))}
      </div>
      <Link href={"/"} className="flex flex-col items-center">
        <Image src={LogoDefault} width={100} height={60} alt="Logo rainbow booth" />
        {/* <div className="font-semibold text-6xl">RB</div>
        <div>Rainbow Booth</div> */}
      </Link>
      <div className="lg:flex hidden flex-row items-center justify-end gap-3">
        <Link href={"/"} className="text-xl  hover:text-red-500">
          <FaYoutube />
        </Link>
        <Link href={"https://www.facebook.com/RainbowBoothVN"} className="text-xl  hover:text-blue-500">
          <FaFacebookF />
        </Link>
        <Link href={"https://www.instagram.com/event.rainbowbooth/"} className="text-xl  hover:text-orange-500">
          <RiInstagramFill />
        </Link>
        <Link href={"/"} className="text-xl  hover:text-blue-500">
          <FaTwitter />
        </Link>
      </div>
    </section>
  )
}

function HeaderMobile() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  return (
    <>
      <section className="container flex flex-row justify-between items-center gap-8">
        <Link href={"/"} className="flex flex-col items-center">
          <Image src={LogoDefault} width={100} height={60} alt="Logo rainbow booth" />
          {/* <div className="font-semibold text-6xl">RB</div>
      <div>Rainbow Booth</div> */}
        </Link>
        <div>
          <div className="flex flex-row items-center justify-end gap-3">
            <button className="text-2xl " onClick={() => setIsOpenSidebar(true)}>
              <HiOutlineMenuAlt3 />
            </button>
            <Link href={"https://www.facebook.com/RainbowBoothVN"} className="text-xl  hover:text-blue-500">
              <FaFacebookF />
            </Link>
            <Link href={"https://www.instagram.com/event.rainbowbooth/"} className="text-xl  hover:text-orange-500">
              <RiInstagramFill />
            </Link>
          </div>
        </div>
      </section>
      <Sidebar isOpen={isOpenSidebar} onClose={() => setIsOpenSidebar(false)} />
    </>
  )
}

function MenuItem({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href || "/"} className="font-semibold text-md hover:text-orange-700 uppercase text-nowrap">
      {label}
    </Link>
  )
}
