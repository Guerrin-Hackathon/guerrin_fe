/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    IMMUTABLEX_API: process.env.IMMUTABLEX_API,
    ADDRESS: process.env.ADDRESS
  },
}
