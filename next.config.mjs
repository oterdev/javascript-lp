/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.facebook.com",
      },
    ],
  },
};

export default nextConfig;
