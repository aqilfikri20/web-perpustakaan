/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.188.98.101",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
