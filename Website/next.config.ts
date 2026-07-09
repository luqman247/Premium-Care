import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
