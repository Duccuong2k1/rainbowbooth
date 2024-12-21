/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rainbowbooth.com.vn", "i.imgur.com"], // Add the domain where your images are hosted
    // localPatterns: [
    //   {
    //     pathname: "/assets/images/**",
    //     search: "",
    //   },
    // ],
  },
}

export default nextConfig
