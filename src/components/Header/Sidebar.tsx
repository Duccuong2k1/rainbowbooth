import Link from "next/link"

import React from "react"

import { SlideOut } from "../SlideOut"
import { MENU_MAIN } from "@/constants/default"
import { RowItemLabel } from "./HeaderTopBar"
import { LuClock5, LuMapPin } from "react-icons/lu"
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md"
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { useRouter } from "next/navigation"
interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar(props: SidebarProps) {
  const router = useRouter()
  const handleClick = (href: string) => {
    router.push(href)
    props.onClose?.()
  }
  return (
    <SlideOut isOpen={props.isOpen} onClose={props.onClose} className={"w-full md:w-1/2"}>
      <div className="">
        <div className="flex flex-col items-start justify-start gap-5 py-3">
          <div className="flex flex-col items-start w-full ">
            {MENU_MAIN.map((menu, index) => (
              <div onClick={() => handleClick(menu.href)} key={index} className="cursor-pointer">
                <a className="block w-full p-2 text-black font-semibold hover:text-orange-500">{menu.label}</a>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-3 w-full border-t py-3">
            <RowItemLabel icon={<LuMapPin />} label={"Ho Chi Minh City"} />
            <RowItemLabel icon={<MdOutlineEmail />} label={"Info@rainbowbooth.com.vn"} />
            <RowItemLabel icon={<LuClock5 />} label={"Mon - Sat 09:00 - 18:00"} />
            <RowItemLabel icon={<MdOutlineLocalPhone />} label={"Reserve: +012345667"} />

            <div className="flex flex-row items-center justify-start gap-3 text-black border-t w-full py-3">
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
        </div>
      </div>
    </SlideOut>
  )
}
