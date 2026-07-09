import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    localPatterns: [
      {
        pathname: "/api/dam/image/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/governance",
        destination: "/ledelsesansvar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
