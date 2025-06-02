/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // desativa a otimização de imagens para export estático
  },
};

export default nextConfig;
