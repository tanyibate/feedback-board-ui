/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#4661E6",
        "zircon-gray": "#F2F4FF",
        "electric-violet": "#AD1FEA",
        "tacao-dark-orange": "#F49F85",
        "macaroni-cheese-orange": "#FBB57A",
        "malibu-light-blue": "#7AD8FB",
        "dark-malibu-light-blue": "#62BCFA",
        "east-bay-dark-blue": "#3A4374",
        "rhino-dark-blue": "##373F68",
      },
    },
  },
  plugins: [],
};
