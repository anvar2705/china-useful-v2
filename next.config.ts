import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const REPO_NAME = "china-useful-v2";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? `/${REPO_NAME}` : "",
  assetPrefix: isProd ? `/${REPO_NAME}` : "",
};

export default nextConfig;
