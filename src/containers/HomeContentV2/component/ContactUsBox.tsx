import React from "react"
import FormContact from "./FormContact"
import TitleWrapper from "@/components/TitleWrapper"
import { cn } from "@/lib/utils"

type Props = {}

export default function ContactUsBox({}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center container py-12" id="contact">
      <div>
        <FormContact />
      </div>
      <div className="relative lg:block hidden">
        <div className="border-csYellow w-[400px] rounded-full h-[400px] border-2 animate-pulse"></div>
        <div className="border-csYellow w-[100px] h-[100px] border-2 absolute right-32 -bottom-[60px] animate-bounce"></div>
        <h3
          className={cn(
            " p-3 text-gradient inline-block font-semibold uppercase text-3xl w-3/4 text-center leading-[50px] tracking-widest ",
            "absolute top-1/4 left-[100px] transform -translate-x-1/2 -translate-y-1/2",
            "animate-pulse",
          )}
          data-aos="zoom-in"
        >
          Nhận giá booth & thông tin
        </h3>
        <TitleWrapper
          bgColor={"bg-csYellow"}
          textColor="text-black"
          label="Rainbow Booth"
          className="absolute top-[60%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-lg"
        />
      </div>
    </div>
  )
}
