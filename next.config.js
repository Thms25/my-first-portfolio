/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/my-first-portfolio",
  assetPrefix: "/my-first-portfolio//",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
