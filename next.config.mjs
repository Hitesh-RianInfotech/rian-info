// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['ntrrxmaqbcihfdzllakr.supabase.co'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'randomuser.me',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  