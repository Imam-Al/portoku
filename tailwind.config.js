/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#f7f6f4',
          100: '#eeece7',
          200: '#dbd7cf',
          300: '#c3bcb1',
          400: '#a89d8f',
          500: '#8f8276',
          600: '#766b5f',
          700: '#5f564d',
          800: '#3d3830',
          900: '#1e1b16',
          950: '#100f0c',
        },
        accent: {
          DEFAULT: '#1a3a5c',
          light:   '#2e5f8e',
          muted:   '#a8bbcc',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e1b16',
          },
        },
      },
    },
  },
  plugins: [],
}
