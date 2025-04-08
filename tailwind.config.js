export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Urbanist'", "sans-serif"], // ← خط الموقع الأساسي
      },
    },
  },
  plugins: [],
};
