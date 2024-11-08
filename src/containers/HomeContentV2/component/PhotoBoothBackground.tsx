"use client"
import HastTag from "@/components/HastTag"
import { BnrImg3, BnrImg4, BnrImg5, EventImg9 } from "@/constants/event"
import Image from "next/image"
import React, { useState } from "react"
import { FaCamera } from "react-icons/fa"

const PhotoBoothBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY)
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      <div
        className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 via-blue-500 via-green-400 via-yellow-400 via-orange-500 to-red-500 animate-gradient"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="absolute transform rotate-12 bg-white bg-opacity-10 rounded-lg p-4 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: "120px",
                height: "140px",
                border: "4px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <FaCamera className="text-white text-2xl opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 h-full py-20 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 tracking-wider shadow-text">Where dreams come true</h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto leading-relaxed shadow-text">
            Step into our magical photo booth and create memories that will last forever. Experience the perfect blend
            of fun and photography.
          </p>
          {/* <button className="mt-8 px-8 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
            Book Now
          </button> */}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 relative z-10 h-full container">
        <div className="relative border-4 border-white" data-aos="zoom-in">
          <HastTag bgColor={"bg-[#00bbdc]"} textColor="text-white" label="Rainbow booth" />{" "}
          <Image
            src={BnrImg5}
            width={500}
            height={300}
            alt="Chào mừng bạn đến với Rainbow Booth"
            // loading="lazy"
            className="max-h-[500px]"
          />
        </div>
        <div className="relative border-4 border-white" data-aos="zoom-in">
          <HastTag bgColor={"bg-[#e14a2c]"} textColor="text-white" label="Rainbow at Fpt" />{" "}
          <Image
            src={EventImg9}
            width={500}
            height={300}
            alt="Chào mừng bạn đến với Rainbow Booth"
            className="max-h-[500px]"
            // loading="lazy"
          />
        </div>
        <div className="relative border-4 border-white" data-aos="zoom-in">
          <HastTag bgColor={"bg-black"} textColor="text-[#feff63]" label="Pro booth" />{" "}
          <Image
            src={BnrImg3}
            width={500}
            height={300}
            alt="Chào mừng bạn đến với Rainbow Booth"
            className="max-h-[500px]"
            // loading="lazy"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  )
}

export default PhotoBoothBackground
