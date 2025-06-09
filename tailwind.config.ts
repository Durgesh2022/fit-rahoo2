import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [
    aspectRatio,
    plugin(({ addUtilities }) => {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',       // IE and Edge
          'scrollbar-width': 'none',          // Firefox
          '&::-webkit-scrollbar': {
            display: 'none',                  // Chrome, Safari, Opera
          },
        },
      });
    }),
  ],
};

export default config;
