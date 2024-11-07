import Link from "next/link"
import React from "react"

type Props = {}

export default function ContactBox({}: Props) {
  return (
    <div className="py-24  bg-[#fef7f5]">
      <div className="container grid grid-cols-3 items-center gap-20">
        <div className="col-span-2" data-aos="zoom-in-up">
          <div className="text-6xl text-gradient ">You need to try this</div>
          <p className="my-4 text-2xl text-gray-500"> Colour Your Moments Make your party memorable and fun</p>
        </div>
        <Link
          href={"https://docs.google.com/forms/d/1T1C4nKhGU0n3lxTXSGYzxrEEpJdCfcPOUeehwFMTyIg/prefill"}
          className="mx-auto inline-block px-4 py-3 h-[50px] text-center rounded-full bg-black text-white font-semibold hover:shadow-md hover:text-orange-500"
          data-aos="zoom-in-up"
          target="_blank"
        >
          Contact now
        </Link>
      </div>
    </div>
  )
}
