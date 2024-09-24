/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gmail': 'url(./components/images/gmail.png)',
        'linkedin': 'url(./app/components/images/linkedin.png)',
        'github': 'url(./app/components/images/github.png)',
      },
      fontFamily: {
        'VT323': ['VT323', 'monospace'],
      },
      colors: {
        sand: {
          light: '#f0f0f0',
          DEFAULT: '#f0f0f0',
          dark: 'f0f0f0',
        }
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
}
