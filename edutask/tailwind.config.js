/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
    
    ],
    theme: {
      extend: {  
        screens: {
        sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      },
        colors: {
       
          "purple": '#8338EC',
          
        },
      },
    },
    plugins: [],
  }