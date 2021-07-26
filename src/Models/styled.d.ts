import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      small: string;
      normal: string;
      big: string;
    };

    colors: {
      fontColor: string;
      background: string;
      panelColor: string;
      primary: string;
      secondary: string;
      white: string;
      black: string;
      warningRed: string;

      inactiveGray: string;
      neutralGray: string;
      lightGray: string;
    };

    breakpoints: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopM: string;
      laptopL: string;
      desktop: string;
    };
  }
}
