/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myDarkBlue: "var(--myDarkBlue)",
        myLightBlue: "var(--myLightBlue)",
        myDarkRed: "var(--myDarkRed)",
        myLightRed: "var(--myLightRed)",
        myDarkGreen: "var(--myDarkGreen)",
        myLightGreen: "var(--myLightGreen)",
      },
    },
  },
  plugins: [],
};
