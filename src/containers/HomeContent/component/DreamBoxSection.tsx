import React from "react"
import ImageEvent1 from "@/public/image/image-event-1.jpg"
import Image from "next/image"

export default function DreamBoxSection() {
  return (
    <section className="container my-10 grid grid-cols-2 gap-8 items-center">
      <div>
        <Image
          src={ImageEvent1}
          height={300}
          width={600}
          alt="Where dreams come true"
          className="rounded-tl-[35%] rounded-tr-[35%]"
          //   loading="lazy"
        />
      </div>
      <div className="">
        <p className="text-[90px] font-semibold leading-[110px] flex flex-col items-start">
          <span>{`"Where`}</span> <span>dreams</span> <span>come {`true"`}</span>
        </p>
        <p className=" mt-6 text-lg font-semibold text-gradient">Rainbow Booth</p>
      </div>
    </section>
  )
}
