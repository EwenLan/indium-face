/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home/welcome",
        permanent: true,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/dynamicmenu",
        destination: "/dynamicmenu.json",
      }
    ]
  }
};

export default nextConfig;
