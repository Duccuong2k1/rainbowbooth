import Link from "next/link"
import React from "react"
import { FaCheck, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import LogoDefault from "@/public/assets/imgs/logo-rainbow.png"
import Image from "next/image"

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#151515] py-10">
      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
        <div className="">
          <Link href={"/"} className="flex flex-col  mb-6 ">
            {/* <div className="font-semibold text-6xl">RB</div>
            <div>Rainbow Booth</div> */}
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
      </section>
    </footer>
  )
}
