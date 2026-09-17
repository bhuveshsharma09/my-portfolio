/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/community",
        destination: "/experience#community",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
