const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts"],
  swcMinify: true,
  transpilePackages: ["nextjs-components"],
  // any configs you need
}

module.exports = withNextra(nextConfig)
