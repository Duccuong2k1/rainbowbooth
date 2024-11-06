import React from "react"
import HeaderTopBar from "./HeaderTopBar"
import HeaderMain from "./HeaderMain"

type Props = {}

export default function Header({}: Props) {
  return (
    <section>
      <HeaderTopBar />
      <HeaderMain />
    </section>
  )
}
