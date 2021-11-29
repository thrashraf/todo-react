 // tailwind.config.js
 module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },


      backgroundImage: (theme) => ({
        'desktop-light': "url('assets/bg-desktop-light.jpg')",
        'desktop-dark': "url('assets/bg-desktop-dark.jpg')",
        'mobile-light': "url('assets/bg-mobile-light.jpg')",
        'mobile-dark': "url('assets/bg-mobile-dark.jpg')"
       })
     },

     letterSpacing: {
       custom: '0.3em'
     },

     borderRadius: {
       'firstChild': '10px 10px 0 0',
       'lastChild': '0 0 10px 10px',
       'full': '50%',
       'input': '5px'
     }
   },
   variants: {
     extend: {
      borderRadius: ['first', 'last'],
     },
   },
   plugins: [],
 }