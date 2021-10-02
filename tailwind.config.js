const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    transitionDuration: {
      '2': '0.2s;'
    },
      width: {
        '350': '350px',
        '275': '275px',
        '90': '90%'
      },
      colors: {
        primary: {
          button: "rgb(0, 186, 124)",
          button_hover: "#00A770",
          twıtter_ıcon: "#031018",
          navi_hover: "#161616",
          profile_color: "#697077",
          search_box: "#202327",
          search_box_color: "#00ba7c",
          trends_fy_color: "#15181C",
          container_border_color: "#2F3336",
          wigdets_background_color: "#15181C",
          trends_d_color: "#8899a6",
          trends_hover: "#1C1F23",
          trends_circle_hover: "#1d9bf0",
          tweetbox_colors: "#00ba7c",
          tweetbox_colors_hover: "#007B52",
          gray_colors: "#62696F",
          tweets_hover_colors1: "#1d9bf01a",
          tweets_hover_colors2: "#00ba7c",
          tweets_hover_colors3: "#f91880"
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
