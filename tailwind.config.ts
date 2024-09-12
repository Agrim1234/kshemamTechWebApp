import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadein: 'fadein 1s linear 1',
        fadeout: 'fadeout 1s linear 1',
        fadeinleft: 'fade-in-left 1s linear 1',
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: '0'
          },
          "100%": {
            opacity: '1'
          },
        },
        fadeout: {
          "0%": {
            opacity: '1'
          },
          "100%": {
            opacity: '0'
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: '0',
            transform: "translate3d(-100%, 0, 0)"
          },
          "100%": {
            opacity: '1',
            transform: "translate3d(0, 0, 0)"
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '64px',
      },
      padding: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
    },
  },
  plugins: [],
};
export default config;
