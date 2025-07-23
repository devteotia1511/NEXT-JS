/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.axelerant.com',
            port: '',
            search: '',
          },
        ],
      },
};

export default nextConfig;
