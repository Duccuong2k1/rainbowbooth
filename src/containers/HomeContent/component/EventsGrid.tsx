import {
  EventImg1,
  EventImg2,
  EventImg3,
  EventImg4,
  EventImg5,
  EventImg6,
  EventImg7,
  EventImg9,
} from "../../../constants/assets-local"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"

export default function EventsGrid() {
  return (
    <section className="container my-10">
      <div className="text-center">
        <div className="text-4xl font-semibold text-font ">Những sự kiện Rainbow Booth từng góp mặt</div>
        <p className="text-gray-500 mt-4 text-xl w-full lg:w-[40%] mx-auto">
          {`“It’s one thing to make a picture of what a person looks like, it’s another thing to make a potrait of who
          they are.”`}
        </p>
        <p className="text-gray-500 mt-4 w-[50%] mx-auto text-gradient"> — Paul Caponigro</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center py-20">
        <div className="grid grid-rows-3 gap-10">
          <div className="row-span-1">
            <EventItem img={EventImg4} title="My Duc wedding" desc="Jun,27, 2024" />
          </div>
          <div className="row-span-2">
            <EventItem img={EventImg1} title="Giang & Linh Wedding" desc="Fer,03,2024" />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-10">
          <div className="row-span-2">
            {" "}
            <EventItem img={EventImg2} title="Giang & Linh Wedding" desc="Fer,03,2024" />
          </div>
          <div className="row-span-1">
            {" "}
            <EventItem img={EventImg5} title="My Duc wedding" desc="Jun,27, 2024" />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-10">
          <div className="row-span-1">
            {" "}
            <EventItem img={EventImg6} title="My Duc wedding" desc="Jun,27, 2024" />
          </div>
          <div className="row-span-2">
            <EventItem img={EventImg3} title="Giang & Linh Wedding" desc="Fer,03,2024" />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-10">
          <div className="row-span-2">
            {" "}
            <EventItem img={EventImg9} title="FPT School" desc="May,11,2024" />
          </div>
          <div className="row-span-1">
            {" "}
            <EventItem img={EventImg7} title="My Duc wedding" desc="Fer,03,2024" />
          </div>
        </div>
      </div>
    </section>
  )
}

function EventItem({ img, title, desc }: { img: string | StaticImageData; title: string; desc: string }) {
  return (
    <Link
      href={"https://www.facebook.com/RainbowBoothVN"}
      className="flex event-item flex-col items-center gap-4"
      data-aos="zoom-in-up"
    >
      <div className="image-container">
        <Image src={img} alt={title} width={300} height={100} loading="lazy" className="event-image" />
        <div className="overlay"></div>
      </div>
      <div className="capitalize font-semibold">{title}</div>
      <div className="text-gray-500 text-font">{desc}</div>
    </Link>
  )
}
