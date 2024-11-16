"use client"
import React from "react"

import TitleWrapper from "@/components/TitleWrapper"

export default function EventsParticipation() {
  return (
    <section className="h-full py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end py-6 mb-6 container">
        <div className="flex flex-col gap-1">
          <TitleWrapper
            bgColor={"bg-[#8b0688]"}
            textColor="text-gradient"
            label="Rainbow Booth"
            className="lg:w-1/3 w-full text-lg"
          />
          <TitleWrapper
            bgColor={"bg-[#8b0688]"}
            textColor="text-white"
            label="Sự kiện đã góp mặt"
            className="md:w-3/5 w-full "
          />
        </div>
        <div>
          <p
            data-aos="zoom-in"
            className="text-[#a2ecdd] uppercase text-lg font-semibold"
          >{`“It’s one thing to make a picture of what a person looks like, it’s another thing to make a potrait of who they are.”`}</p>
        </div>
      </div>
    </section>
  )
}
