/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["your-image-domain.com"], // Add if using external image URLs
  },
};

export default nextConfig;
