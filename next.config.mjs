/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
