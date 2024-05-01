import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "brand-color": "#0F9AFE",
      "brand-color-light": "#EFF8FF",
      "dark-10": "#293145",
      "dark-20": "#6E7275",
      "dark-30": "#DBDBDB",
      "dark-40": "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        'pc-background': "url('/assets/images/computer.png')",
      },
      boxShadow: {
        "3xl": "1px 3px 24px 0px rgba(1,56,222,0.5)",
      },
      fontFamily: {
        'inter': ['Inter','sans-serif'],
        'sora': ['Sora','sans-serif']
       },
    },
  },
  plugins: [],
};
export default config;
