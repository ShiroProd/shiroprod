import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // L'optimisation d'image de Next.js a besoin d'un serveur — désactivée
    // ici car le site est exporté en HTML/CSS/JS statique pour un
    // hébergement type Hostinger (pas de serveur Node.js requis).
    unoptimized: true,
  },
};

export default nextConfig;
