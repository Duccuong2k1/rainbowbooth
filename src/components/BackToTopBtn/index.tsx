// BackToTop.js
"use client"
import React, { useState, useEffect } from "react"
import { IoChevronUp } from "react-icons/io5"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="btn-back-top text-2xl" aria-label="Back to Top">
          <IoChevronUp />
        </button>
      )}
    </>
  )
}
