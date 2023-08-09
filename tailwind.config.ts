import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
