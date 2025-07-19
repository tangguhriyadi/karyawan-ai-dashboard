import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/mootasi",
        permanent: true, // This sets 308 status code
      },
    ];
  },
};

export default nextConfig;
