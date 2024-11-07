"use client"
import { useState, useEffect } from "react"

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return isScrolled
}
