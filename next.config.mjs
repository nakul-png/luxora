/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  async rewrites() {
    return [
      {
        source: "/api/products",
        destination: "/products/",
      },
    ];
  },
};

export default nextConfig;