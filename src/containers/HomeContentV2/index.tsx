import React from "react"
import BannerSlider from "./component/BannerSlider"
import EventsParticipation from "./component/EventsParticipation"
import WhyNotBox from "./component/WhyNotBox"
import ContactUsBox from "./component/ContactUsBox"
import AutoScrollImages from "@/components/AutoScrollImage"

export default function HomeContentV2() {
  return (
    <div>
      <BannerSlider />
      {/* <PhotoBoothBackground /> */}
      <EventsParticipation />
      <AutoScrollImages />
      <WhyNotBox />
      <ContactUsBox />

      {/* <BackToTop /> */}
    </div>
  )
}
