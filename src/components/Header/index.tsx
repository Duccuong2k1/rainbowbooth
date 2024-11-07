"use client"
import React from "react"
import HeaderMain from "./HeaderMain"
import { useScroll } from "@/hooks/useScroll"
import { cn } from "@/lib/utils"

export default function Header() {
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
