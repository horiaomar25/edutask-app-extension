/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      "purple": '#8338EC',
      "gradient-purple": "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(131,32,217,1) 0%, rgba(215,120,249,1) 100%);",
      "purple-two": "#9854CC"
    },
    fontFamily: {
      'poppins': ['Poppins', 'san-serif'],
    },
    backgroundImage: {
      'gradient-purple': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(131,32,217,1) 0%, rgba(215,120,249,1) 100%)',
    }
  },
};
export const plugins = [];