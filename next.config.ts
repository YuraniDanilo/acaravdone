@type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 🚫 Ignora erros de tipo durante o build
    ignoreBuildErrors: true,
  },
  eslint: {
    // 🚫 Ignora erros do ESLint também
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;