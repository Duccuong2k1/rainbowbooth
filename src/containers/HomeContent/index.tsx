import React from "react"
import BannerSlider from "./component/BannerSlider"
import FeatureGrid from "./component/FeatureGrid"
import EventsGrid from "./component/EventsGrid"
import AdsBox from "./component/AdsBox"
import PostList from "./component/PostList"
import ContactBox from "./component/ContactBox"

export default function HomeContent() {
  return (
    <div className="">
      <BannerSlider />
      <FeatureGrid />
      <EventsGrid />
      <AdsBox />
      <PostList />
      <ContactBox />
      {/* <DreamBoxSection /> */}
      {/* <MainSlogan /> */}
    </div>
  )
}
