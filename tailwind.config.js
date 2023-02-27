/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "sm-xxs": ["0.625rem", "0.9375rem"],
      "sm-xs": ["0.8125rem", "1.25rem"],
      "sm-s": ["0.8125rem", "1.25rem"],
      "sm-m": ["1.0625rem", "1.5625rem"],
      "sm-l": ["1.25rem", "1.75rem"],
      "sm-xl": ["1.625rem", "2.5rem"],
      "lg-xxs": ["0.75rem", "1rem"],
      "lg-xs": ["0.875rem", "1.4375rem"],
      "lg-s": ["1.125rem", "1.5625rem"],
      "lg-m": ["1.25rem", "1.875rem"],
      "lg-l": ["1.875rem", "2.625rem"],
      "lg-xl": ["2.5rem", "3.4375rem"],
    },
    extend: {
      colors: {
        primary: "#d327fc",
        "background-gray": "#F6F6F6",
        "background-blue": "#2FADDE",
        "background-blue-gradient": "#138AB9",
        "background-black": "#231F20;",
        "mt-black": "#000000D9",
      },
      animation: {
        fadeIn: "fadeIn 250ms ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      variants: {
        animation: ["motion-safe"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
