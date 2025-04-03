/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  images: {
    unoptimized: true, // Required for static exports if using next/image
  },
  trailingSlash: true, // Ensures proper routing for GitHub Pages
  assetPrefix: '/', // Ensures CSS and JS files load correctly
};
  
export default nextConfig;
  
