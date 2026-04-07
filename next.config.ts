import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local SVGs are served reliably without the image optimization proxy.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
