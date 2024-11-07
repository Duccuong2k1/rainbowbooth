import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export function FeatureItem({ img, title }: { img: string | StaticImageData; title: string }) {
  return (
    <Link href={"https://www.facebook.com/RainbowBoothVN"} data-aos="zoom-in-up">
      <Image src={img} height={80} width={500} alt={title} className="hover:scale-105 rounded-md transition-all" />
      <div className="uppercase text-xl mt-3 text-center font-medium text-gradient">{title}</div>
    </Link>
  )
}
