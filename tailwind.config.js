/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace", //la propiedad sans, remplaza los valores por defecto de tailwind
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
