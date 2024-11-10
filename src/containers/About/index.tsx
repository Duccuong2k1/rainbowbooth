import { contentHTML } from "@/constants/content-about"
import React from "react"

type Props = {}

export default function AboutContentPage({}: Props) {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 via-blue-500 via-green-400 via-yellow-400 via-orange-500 to-red-500 animate-gradient">
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} className="container pt-[200px]" />
      </div>
    </div>
  )
}
