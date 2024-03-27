/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./public/**/*.html"],
  theme: {
    screens: {
      'sm': '640px',
      //  @media (min-width: 640px) 

      'md': '768px',
      //  @media (min-width: 768px) 

      'lg': '1024px',
      //  @media (min-width: 1024px)
    },
    extend: { },
    colors:{
    fav: {
      400 : " #94a3b8 ",
    },
        },
  },
  plugins: [],
}
