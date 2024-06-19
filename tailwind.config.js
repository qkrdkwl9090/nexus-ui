/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
