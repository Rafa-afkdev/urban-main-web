import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  reactCompiler: true,

  // ─── Image Optimization ──────────────────────────────────────────────────
  images: {
    // Replace deprecated "domains" with secure remotePatterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Responsive breakpoints that match Tailwind's sm/md/lg/xl/2xl
    deviceSizes: [375, 640, 768, 1024, 1280, 1536, 1920],
    // Sizes used for art-directed or srcset images
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    // Generate modern WebP and AVIF formats automatically
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for up to 1 year in Next.js's image cache
    minimumCacheTTL: 31536000, // 1 year in seconds
  },

  // ─── HTTP Cache Headers ───────────────────────────────────────────────────
  async headers() {
    const staticAssetExtensions = [
      "jpg", "jpeg", "png", "webp", "avif", "gif", "svg", "ico",
      "woff", "woff2", "ttf", "otf",
    ];

    const staticHeaders = staticAssetExtensions.map((ext) => ({
      source: `/:path*.${ext}`,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, stale-while-revalidate=86400, immutable",
        },
      ],
    }));

    return [
      // Cache JS and CSS chunks (Next.js builds them with content hashes)
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache static image/font assets by extension
      ...staticHeaders,
      // HTML pages: revalidate often but allow stale serving while revalidating
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
