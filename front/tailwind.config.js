/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-pattern":
          "url(./assets/images-custom/pexels-tima-miroshnichenko-7879835.jpg)",
      },
    },
  },
  plugins: [],
};
