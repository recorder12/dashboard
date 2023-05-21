/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        menu: "#2980b9",
        menuBorder: "#3498db",
        primary: "#3498db",
        logout: "#e67e22",
      },
    },
  },
  plugins: [],
};
