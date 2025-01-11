import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        grayCream: "#EEEEEE",
      },
      fontSize: {
        base: "14px",
      },
      backgroundImage: {
        "hero-bg-desktop": "url('/images/bg-hero.png')",
        "hero-bg-mobile": "url('/images/bg_hero_mobile.png')",
        "fairy-bg": "url('/images/ong_tien.png')",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50px)" },
          "75%": { transform: "translateY(50px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
