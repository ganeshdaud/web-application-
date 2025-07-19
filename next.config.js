/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // productionBrowserSourceMaps: true,
  images: {
    loader: "akamai",
    path: "",
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This skips ESLint during `npm run build`
  }
};

module.exports = nextConfig;
