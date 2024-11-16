"use client"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import TitleWrapper from "@/components/TitleWrapper"
import { toast } from "react-toastify"
import { cn } from "@/lib/utils"

export default function FormContact() {
  const form = useRef<HTMLFormElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Set up react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const sendEmail = (data: any) => {
    if (form.current) {
      setIsLoading(true)
      try {
        emailjs
          .sendForm(
            `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
            `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
            form.current,
            `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
          )
          .then(
            () => {
              toast.success("Yêu cầu đã gửi thành công! sẽ có người phản hồi sớm cho bạn")
              console.log("SUCCESS!", form.current)
              setIsLoading(false)
              reset() // Reset the form after submission
            },
            (error) => {
              console.log("FAILED...", error.text)
              toast.error("Yêu cầu đã gửi thất bại!")
            },
          )
      } catch (error) {
        console.error("Request contact error", error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="">
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="flex flex-col relative gap-4 w-full lg:max-w-lg  shadow-lg border-2 border-csPink mt-6 pb-6 pt-10 px-6"
      >
        <TitleWrapper
          bgColor={"bg-[#d31f7e]"}
          textColor="text-white"
          label="Liên hệ chúng tôi"
          className="text-lg lg:text-3xl absolute -top-10 left-5"
        />
        <label className="text-csText font-light">
          Họ và tên <span className="text-gray-400 text-sm">(bắt buộc)</span>{" "}
        </label>
        <input
          type="text"
          {...register("user_name", { required: " Họ và tên không được để trống" })}
          className={`w-full p-2 text-white rounded-md bg-transparent focus:outline-none border focus:ring-2 ${
            errors.user_name ? "focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
        {errors.user_name?.message && <p className="text-red-500 text-sm">{String(errors.user_name.message)}</p>}

        <label className="text-csText font-light">
          Email <span className="text-gray-400 text-sm">(bắt buộc)</span>{" "}
        </label>
        <input
          type="email"
          {...register("user_email", {
            required: "Email không được để trống",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          className={`w-full p-2  text-white  rounded-md bg-transparent focus:outline-none border focus:ring-2  ${
            errors.user_email ? "focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
        {errors.user_email?.message && <p className="text-red-500 text-sm">{String(errors.user_email.message)}</p>}
        <label className="text-csText font-light">
          Số điện thoại <span className="text-gray-400 text-sm">(bắt buộc)</span>{" "}
        </label>
        <input
          type="text"
          {...register("phone_number", {
            required: "Số điện thoại không được để trống",
          })}
          className={`w-full p-2  text-white  rounded-md bg-transparent focus:outline-none border focus:ring-2  ${
            errors.phone_number ? "focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
        {errors.phone_number?.message && <p className="text-red-500 text-sm">{String(errors.phone_number.message)}</p>}

        <label className="text-csText font-light">
          Ghi chú <span className="text-gray-400 text-sm">(bắt buộc)</span>{" "}
        </label>
        <textarea
          {...register("message", { required: "Ghi chú không được để trống" })}
          className={`w-full text-white p-2 rounded-md bg-transparent focus:outline-none border focus:ring-2  ${
            errors.message ? "focus:ring-red-500" : "focus:ring-blue-500"
          } h-32 resize-none`}
        />
        {errors.message?.message && <p className="text-red-500 text-sm">{String(errors.message.message)}</p>}

        <button
          type="submit"
          className={cn(
            "w-full py-2 mt-4 font-semibold  rounded-md cursor-pointer disabled:cursor-not-allowed text-white bg-csPink hover:bg-pink-500 transition-colors disabled:bg-[#b2b0b6]",
          )}
          disabled={isLoading}
        >
          Gửi cho chúng tôi
        </button>
      </form>
    </div>
  )
}
