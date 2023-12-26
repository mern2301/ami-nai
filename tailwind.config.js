/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container': '1144px',
      },
      colors: {
        'praimary': '#F40404',
        'secondary': '#6C6C6C',
        'overlay': '#00000099',
        
      },
      backgroundImage: {
        // 'banner': "url('../../assets/banner.png')",
        // 'Services': "url('../../assets/Services.png')",
        // 'Company': "url('./company.png')",


      }
    },
  },
  plugins: [],
}
