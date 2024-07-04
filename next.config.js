/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_ANALYTICS_KEY: process.env.GOOGLE_ANALYTICS_KEY,
        HASHNODE_API_TOKEN: process.env.HASHNODE_API_TOKEN
    }
}

module.exports = nextConfig
