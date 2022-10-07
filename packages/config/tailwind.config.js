module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#33A9FE",
          secondary: "#d8b4fe",
          accent: "#C149AD",
          neutral: "#172231",
          "base-100": "#121E2A",
          info: "#1e40af",
          success: "#1EB972",
          warning: "#F3AF2D",
          error: "#E94E30",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
