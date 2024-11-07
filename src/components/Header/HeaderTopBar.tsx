import React from "react"
import { LuClock5, LuMapPin } from "react-icons/lu"
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md"

type Props = {}

export default function HeaderTopBar({}: Props) {
  return (
    <section className="bg-[#312d2c] py-2 text-white lg:block hidden">
      <div className="flex flex-row items-center justify-between  container ">
        <div className="flex flex-row items-center justify-start gap-x-8">
          <RowItemLabel icon={<LuMapPin />} label={"Ho Chi Minh City"} />
          <RowItemLabel icon={<MdOutlineEmail />} label={"Info@rainbowbooth.com.vn"} />
        </div>
        <div className="flex flex-row items-center justify-start gap-x-8">
          <RowItemLabel icon={<LuClock5 />} label={"Mon - Sat 09:00 - 18:00"} />
          <RowItemLabel icon={<MdOutlineLocalPhone />} label={"Reserve: +012345667"} />
        </div>
      </div>
    </section>
  )
}

function RowItemLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-row items-center justify-start gap-2">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  )
}
