/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true, // This increases Tailwind's specificity to override styled-components
  theme: {
    extend: {
      colors: {
        'blue-primary': 'hsl(225deg 80% 56%)',
        'blue-secondary': 'hsl(209deg 96% 67%)',
        'custom-blue': '#5AAEFC',
      },
    },
  },
  plugins: [],
}

