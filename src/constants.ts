export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "https://general-strapi.herokuapp.com";
