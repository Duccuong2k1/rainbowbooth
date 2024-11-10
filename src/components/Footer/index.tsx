import Link from "next/link"
import React from "react"
import LogoDefault from "@/public/image/logo-rainbow.png"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className=" pb-10 pt-40 ">
      <div className="flex md:flex-row flex-col justify-between items-center gap-10 pb-5 container">
        <div className="flex flex-col items-center justify-center gap-4 text-center w-full lg:w-[30%] ">
          <Link href={"/"} className="flex flex-col ">
            <Image src={LogoDefault} width={180} height={80} alt="Logo rainbow booth" />
          </Link>
          <div className="flex flex-row items-center justify-center gap-x-2 flex-wrap">
            <Link className="uppercase underline text-[#feff63] font-semibold leading-10 text-nowrap" href={"/"}>
              photo booth
            </Link>
            <span className="h-5 w-[1px] bg-white" />
            <Link className="uppercase underline text-[#feff63] font-semibold leading-10 text-nowrap" href={"/"}>
              video booth
            </Link>
            <span className="h-5 w-[1px] bg-white" />
            <Link className="uppercase underline text-[#feff63] font-semibold leading-10 text-nowrap" href={"/"}>
              360 booth
            </Link>
            <span className="h-5 w-[1px] bg-white" />
            <Link className="uppercase underline text-white font-semibold leading-10 text-nowrap" href={"/"}>
              Audio guest
            </Link>
            <span className="h-5 w-[1px] bg-white" />
            <Link className="uppercase underline text-white font-semibold leading-10 text-nowrap" href={"/"}>
              booking
            </Link>
          </div>
          <p className="text-sm text-csText">Info@rainbowbooth.com.vn</p>
        </div>
        <div className=" w-full lg:w-[50%] grid grid-cols-1 lg:grid-cols-none  md:gap-2 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FooterItemInfo
              borderColor="border-csYellow"
              className="bg-csYellow text-black "
              textColor="text-black"
              title="Rainbow Booth"
              desc="Join you in every moment of life"
            />
            <FooterItemInfo
              borderColor="border-csYellow"
              title="Rainbow 360 Booth"
              desc={`Typically 360 requires 3m x 3m. It can b squeezed in to a small footprint.`}
            />
            <FooterItemInfo
              borderColor="border-csYellow"
              title="Follow us"
              descNode={
                <div className="text-csText">
                  <p>Facebook: Rainbow Booth</p>
                  <p>Instagram: event.rainbowbooth</p>
                </div>
              }
            />
          </div>
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <FooterItemInfo
              borderColor="border-csYellow"
              title="locations"
              desc="Anywhere if you need rainbow booth "
              className="bg-csPink text-black h-60"
              textColor="text-black"
            />
            <FooterItemInfo
              borderColor="border-csPink"
              title="Features"
              descNode={
                <div className="text-csText">
                  <p>Colour Your Moments</p>
                  <p>Make your party memorable and fun</p>
                  <p>Anything you need</p>
                </div>
              }
            />
            <FooterItemInfo
              borderColor="border-csPink"
              title="Follow us"
              descNode={
                <div className="text-csText">
                  <p>Facebook: Rainbow Booth</p>
                  <p>Instagram: event.rainbowbooth</p>
                </div>
              }
            />
          </div> */}
        </div>
      </div>
      <div className="text-center text-csText pt-4 border-t text-sm border-gray-600 mt-6">
        Copyright @2024 by Rainbow booth
      </div>
    </footer>
  )
}

function FooterItemInfo({
  borderColor,
  className,
  title,
  desc,
  textColor,
  descNode,
}: {
  textColor?: string
  borderColor?: string
  className?: string
  title: string
  descNode?: React.ReactNode
  desc?: string
}) {
  return (
    <div className={cn("p-4 border-2 min-h-40 flex flex-col gap-y-3 items-start", borderColor, className)}>
      <div className={cn("text-xl font-semibold capitalize underline", textColor ? textColor : "text-white")}>
        {title}
      </div>
      {desc ? <p className={cn(textColor ? textColor : "text-[#ececec]")}>{desc}</p> : descNode}
    </div>
  )
}
