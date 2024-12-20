import React, { MouseEventHandler, useEffect, useRef, useState } from "react"
import { IoClose } from "react-icons/io5"
import { forceCheck } from "react-lazyload"

export interface SildeOutProps {
  isOpen?: boolean
  onClose?: () => void
  onClick?: MouseEventHandler<HTMLDivElement>
  onOverlayClick?: MouseEventHandler<HTMLDivElement>
  children?: React.ReactNode
  dialogFooter?: boolean
  labelClose?: string
  labelSubmit?: string
  bodyClassName?: string
  maxWidth?: number | string
  height?: number | string
  className?: string
  logoNode?: React.ReactNode
}

export function SlideOut({ className = "w-1/3", children, ...props }: SildeOutProps) {
  const [isOpen, setIsOpen] = useState(props.isOpen)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (props.isOpen) {
      setIsOpen(props.isOpen)
      document.body.style.overflow = "hidden"
      timeout = setTimeout(() => {
        forceCheck()
      }, 100)
    } else {
      document.body.style.overflow = "auto"
      timeout = setTimeout(() => {
        setIsOpen(props.isOpen)
      }, 100)
    }
    return () => {
      clearTimeout(timeout)
      document.body.style.overflow = "auto"
    }
  }, [props.isOpen])
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === wrapperRef.current) {
      if (props.onOverlayClick) {
        props.onOverlayClick(event)
      } else {
        props.onClose && props.onClose() // Gọi hàm đóng dialog nếu onClose được định nghĩa
      }
    }
  }
  return (
    <div className={` relative h-full bg-csBlack`}>
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black opacity-50 " ref={wrapperRef} onClick={handleOverlayClick}></div>
      )}
      {/* Slide-out content */}
      <div
        className={` ${className} fixed top-0 right-0  h-full bg-csBlack z-10 transition duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Content of the slide-out */}
        <div className="p-6">
          {/* <Button
                        icon={<IoClose />}
                        iconClassName={"text-3xl font-semibold"}
                        iconPosition="start"
                        className={"flex justify-end items-end ml-auto hover:shadow-none !p-0"}
                        onClick={props.onClose}
                    /> */}
          <div className="flex flex-row items-center justify-between">
            {props.logoNode && props?.logoNode}
            <button
              onClick={props.onClose}
              className={"flex text-3xl justify-end items-end ml-auto hover:shadow-none !p-0 text-white"}
            >
              <IoClose />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
