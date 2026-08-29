import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/googlec73bbb451bfd6893.html",
        destination: "/googlec73bbb451bfd6893",
      },
    ];
  },
};

export default nextConfig;
