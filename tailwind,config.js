/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/api/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          accent: 'var(--accent-color)',
        },
      },
    },
    plugins: [],
  }