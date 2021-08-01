import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  font: {
    small: "14px",
    normal: "16px",
    big: "20px",
  },

  colors: {
    fontColor: "#ffffff",
    primary: "#ffa000",
    panelColor: "#202020",
    secondary: "#0065FF",
    background: "#121212",
    white: "#ffffff",
    black: "#000000",
    warningRed: "#df0806",
    inputBackground: "#d2d2d2",

    inactiveGray: "#202020",
    neutralGray: "#424242",
    lightGray: "#d2d2d2",
  },

  breakpoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopM: "1230px",
    laptopL: "1440px",
    desktop: "2560px",
  },
};
