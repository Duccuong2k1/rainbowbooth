import React from "react"
type Props = {}

export default function AdsBox({}: Props) {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover h-[300px] w-full"
      style={{ backgroundImage: "url('https://rainbowbooth.com.vn/media/intro/BMM_7502.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h3 className="text-5xl font-bold text-gradient">Book a rainbow</h3>
      </div>
    </div>
  )
}
