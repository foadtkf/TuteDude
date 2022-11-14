/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#800080",

          secondary: "#cbaaf7",

          accent: "#a65def",

          neutral: "#151D23",

          "base-100": "#DCDDEF",

          info: "#89AAF5",

          success: "#16B696",

          warning: "#DF790C",

          error: "#EA5D68",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
