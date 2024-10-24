import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lavender-purple": "#7C5DFA",
        "soft-violet": "#9277FF",
        "midnight-navy": "#1E2139",
        "pale-navy": "#373B53",
        "muted-navy": "#494E6E",
        "deep-charcoal": "#252945",
        "pale-periwinkle": "#DFE3FA",
        "muted-slate": "#888EB0",
        "soft-steel-blue": "#858BB2",
        "cool-blue": "#7E88C3",
        "jet-black": "#0C0E16",
        "coral-red": "#EC5757",
        "off-white": "#F8F8FB",
        "dark-indigo": "#141625",
        "emerald-green": "#33D69F",
        "sunset-orange": "#FF8F00",
      },
    },
  },
  darkMode: "class",
  plugins: [forms],
};
export default config;
