// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // NEW PATTERN: Added to allow images from the /uploads/ path
      {
        protocol: "https",
        hostname: "dashboard.labbaass.com",
        pathname: "/uploads/**",
      },
      // Keep the original /storage/ pattern if you still use it
      {
        protocol: "https",
        hostname: "dashboard.labbaass.com",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
    // keep your qualities if you need them
    qualities: [75, 100],
  },
};

export default nextConfig;
