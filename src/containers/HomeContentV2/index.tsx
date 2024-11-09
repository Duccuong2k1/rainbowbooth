import React from "react"
import BannerSlider from "./component/BannerSlider"
import PhotoBoothBackground from "./component/PhotoBoothBackground"
import EventsParticipation from "./component/EventsParticipation"
import WhyNotBox from "./component/WhyNotBox"
import BackToTop from "@/components/BackToTopBtn"

export default function HomeContentV2() {
  return (
    <div>
      <BannerSlider />
      <PhotoBoothBackground />
      <EventsParticipation />
      <WhyNotBox />
      <BackToTop />
    </div>
  )
}
