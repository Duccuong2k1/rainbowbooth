import Link from "next/link"
import React from "react"
import LogoDefault from "@/public/image/logo-rainbow.png"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className=" pb-10 pt-40 container">
      {/* <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24">
        <div className="">
          <Link href={"/"} className="flex flex-col  mb-6 ">
        
            <Image src={LogoDefault} width={150} height={60} alt="Logo rainbow booth" />
          </Link>
          <p className="text-white">You need to try this Colour Your Moments Make your party memorable and fun</p>
        </div>
        <div>
          <div className="text-xl font-semibold capitalize mb-6 text-white">Features Us</div>
          <p className="text-white mb-3 flex flex-row items-center gap-2">
            <FaCheck /> <span>Colour Your Moments</span>{" "}
          </p>
          <p className="text-white mb-3  flex flex-row items-center gap-2">
            <FaCheck /> <span>Make your party memorable and fun</span>{" "}
          </p>
          <p className="text-white mb-3 flex flex-row items-center gap-2">
            <FaCheck /> <span>Anything you need</span>{" "}
          </p>
        </div>

        <div>
          <div className="text-xl font-semibold capitalize text-white">Follow us on Social</div>
          <p className="text-white my-6">Frequent publications of all the news in photography with tips and ideas</p>
          <div className="flex flex-row items-center justify-start gap-3 text-white">
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
        </div>
      </section> */}

      <div className="flex md:flex-row flex-col justify-between items-start gap-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center w-full lg:w-[30%] ">
          <Link href={"/"} className="flex flex-col  mb-3 ">
            <Image src={LogoDefault} width={150} height={60} alt="Logo rainbow booth" />
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
        <div className=" w-full lg:w-[50%] grid grid-cols-2 lg:grid-cols-none  md:gap-2 gap-4">
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
              title="Prints"
              desc="Print immediately after selecting publish"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
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
          </div>
        </div>
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
