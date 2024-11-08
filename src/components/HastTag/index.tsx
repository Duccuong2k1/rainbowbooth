import { cn } from "@/lib/utils"
import React from "react"

type Props = {
  bgColor: string
  textColor: string
  label: string
}

export default function HastTag({ bgColor, textColor, label }: Props) {
  return (
    <span
      className={cn(
        " absolute -top-6 left-6 z-10 p-3  font-semibold uppercase text-2xl leading-6 tracking-widest",
        bgColor,
        textColor,
      )}
    >
      {label}
    </span>
  )
}
