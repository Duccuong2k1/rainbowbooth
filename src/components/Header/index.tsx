"use client"
import React from "react"
import HeaderTopBar from "./HeaderTopBar"
import HeaderMain from "./HeaderMain"
import { useScroll } from "@/hooks/useScroll"
import { cn } from "@/lib/utils"

type Props = {}

export default function Header({}: Props) {
  const isScrolled = useScroll()
  return (
    <section
      className={cn(
        `fixed w-full top-0 left-0 z-50 transition-colors duration-300`,
        isScrolled ? "bg-white shadow-md text-black " : "bg-transparent text-white",
      )}
    >
      {/* <HeaderTopBar /> */}
      <HeaderMain />
    </section>
  )
}
