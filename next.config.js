/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["images.pexels.com","getbootstrap.com"],
    },
}

module.exports = nextConfig
