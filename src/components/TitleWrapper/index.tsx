import { cn } from "@/lib/utils"
import React from "react"

type Props = {
  bgColor: string
  textColor: string
  label: string
  className?: string
}

export default function TitleWrapper({ bgColor, textColor, label, className }: Props) {
  return (
    <h3
      className={cn(
        " p-3 inline-block font-semibold uppercase text-2xl leading-6 tracking-widest",
        bgColor,
        textColor,
        className,
      )}
    >
      {label}
    </h3>
  )
}
