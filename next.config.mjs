/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a282b633397549478fc7e2204fa66fc2.r2.dev"
      }
    ]
  }
};

export default nextConfig;
