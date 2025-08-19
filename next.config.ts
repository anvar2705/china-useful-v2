const REPO_NAME = "china-useful-v2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: `/${REPO_NAME}`,
  reactStrictMode: true,
  images: {
    domains: ["localhost", "flagcdn.com", "upload.wikimedia.org"],
    unoptimized: true,
  },
};

export default nextConfig;
