const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    host: '0.0.0.0',
  },
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["cdn.jsdelivr.net"],
    unoptimized: true,
  },
  i18n,
};

module.exports = nextConfig;
