"use client"
import React from "react"
import HeaderMain from "./HeaderMain"
import { useScroll } from "@/hooks/useScroll"
import { cn } from "@/lib/utils"

export default function Header() {
  const isScrolled = useScroll()
  if (isScrolled) return <></>
  return (
    <section
      className={cn(
        `fixed w-full top-0 left-0 z-50 transition-colors duration-300 text-white bg-transparent py-4 lg:p-4`,
        isScrolled ? "shadow-md text-[#1a1a1a] " : "bg-transparent ",
      )}
    >
      {/* <HeaderTopBar /> */}
      <HeaderMain />
    </section>
  )
}
