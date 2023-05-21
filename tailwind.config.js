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
        peopleTitle: "#e67e22",
        personCard: "#95a5a6",
        personCardHover: "#ecf0f1",
      },
    },
  },
  plugins: [],
};
