/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-pattern":
          "url(./assets/images-custom/pexels-jack-sparrow-4198970.jpg)",
      },
    },
  },
  plugins: [],
};
