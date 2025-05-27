// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: '#0f0f0f',
          paragraph: '#c3c3c3',
          headline: '#ffffff',
          primary: '#7f5af0',
          secondary: '#2cb67d',
          accent: '#00eeff',
          darker: '#1a1a1a',
          stroke: '#333333',
        },
      },
    },
    plugins: [],
  };
  