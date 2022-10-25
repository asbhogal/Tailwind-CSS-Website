/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,css}', './*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed             :   '#f25f3a',
        brightRedLight        :   '#f6866a',
        brightRedSuperLight   :   '#fdece7',
        darkBlue              :   '#242d52',
        darkGrayishBlue       :   '#9095a7',
        veryDarkBlue          :   '#1d1e25',
        veryPaleRed           :   '#ffefeb',
        veryLightGray         :   '#fafafa',
      }
    }
  },
  plugins: [],
}
