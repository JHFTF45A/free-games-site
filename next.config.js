/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.cloudflare.steamstatic.com",
      "cdn.akamai.steamstatic.com"
    ]
  }
};