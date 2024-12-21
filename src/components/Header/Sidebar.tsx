"use client"
import Link from "next/link"

import React, { useCallback } from "react"

import { SlideOut } from "../SlideOut"
import { MENU_MAIN } from "@/constants/default"

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { LogoDefault } from "@/constants/assets-local"
interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar(props: SidebarProps) {
  const router = useRouter()
  const pathName = usePathname()
  const handleClick = (href: string) => {
    router.push(href)
    props.onClose?.()
  }

  const handleContactBtn = useCallback(() => {
    if (pathName !== "/") {
      router.push("/#contact")
    }
    router.push("/#contact")
  }, [pathName])
  return (
    <SlideOut
      isOpen={props.isOpen}
      onClose={props.onClose}
      className={"w-full md:w-1/2"}
      logoNode={
        <>
          <Link href={"/"} className="flex flex-col items-center">
            <Image src={LogoDefault} width={100} height={60} alt="Logo rainbow booth" />
          </Link>
        </>
      }
    >
      <div className="min-h-screen flex flex-row justify-center w-full items-center">
        <div className="flex flex-col items-center justify-center  gap-5 py-3 w-full">
          <div className="flex flex-col gap-3 items-center w-full h-full my-auto ">
            {MENU_MAIN.map((menu, index) => (
              <div onClick={() => handleClick(menu.href)} key={index} className="cursor-pointer">
                <span
                  className={cn(
                    "block w-full p-2 text-white font-light hover:text-orange-500 text-2xl",
                    pathName === menu.href && "border-b border-white",
                  )}
                >
                  {menu.label}
                </span>
              </div>
            ))}
            <button className="cs-btn" onClick={handleContactBtn}>
              <span className="lg:text-center font-semibold" data-aos="zoom-in-up">
                Liên hệ
              </span>
            </button>
            <div className="flex flex-row items-center justify-center mt-6 gap-3 text-white  w-full py-3">
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
          </div>
          {/* <div className="flex flex-col items-start gap-3 w-full border-t py-3">
            <RowItemLabel icon={<LuMapPin />} label={"Ho Chi Minh City"} />
            <RowItemLabel icon={<MdOutlineEmail />} label={"Info@rainbowbooth.com.vn"} />
            <RowItemLabel icon={<LuClock5 />} label={"Mon - Sat 09:00 - 18:00"} />
            <RowItemLabel icon={<MdOutlineLocalPhone />} label={"Reserve: +012345667"} />

            <div className="flex flex-row items-center justify-start gap-3 text-white border-t w-full py-3">
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
          </div> */}
        </div>
      </div>
    </SlideOut>
  )
}
