"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { ToastContainer } from "react-toastify"

export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init()
    const initializeAOS = () => {}

    window.addEventListener("load", initializeAOS)

    return () => {
      window.removeEventListener("load", initializeAOS)
    }
  }, [])

  return (
    <>
      {children}
      <ToastContainer position="bottom-center" theme="colored" />
    </>
  )
}
