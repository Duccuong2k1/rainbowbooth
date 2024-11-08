import React from "react"
import ImgFeature1 from "@/public/image/img-1.jpg"
import ImgFeature2 from "@/public/image/img-2.jpg"
import ImgFeature3 from "@/public/image/img-3.jpg"

import { FeatureItem } from "@/components/FeatureItem"

export default function FeatureGrid() {
  return (
    <div className="container my-16">
      <div className="text-center">
        <div className="text-4xl font-semibold text-font">{`"Where dreams come true"`}</div>
        <p className="text-gray-500 mt-4 w-full lg:w-[50%] mx-auto">
          {`  Hoàn hảo cho mọi bữa tiệc - nơi nụ cười của bạn và photo booth độc đáo của chúng tôi tạo nên những niềm vui và
          kỉ niệm lưu giữ mãi theo dòng thời gian.`}
        </p>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start lg:items-center py-10">
        <FeatureItem img={ImgFeature1} title="Năng lượng tuổi trẻ" />
        <FeatureItem img={ImgFeature2} title="Không giới hạn" />
        <FeatureItem img={ImgFeature3} title="FPT school" />
      </div>
    </div>
  )
}
