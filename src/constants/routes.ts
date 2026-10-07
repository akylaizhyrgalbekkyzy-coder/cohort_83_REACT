// export enum ROUTES {
//   HOME = "/",
//   ABOUT = "/about",
//   LOGIN = "/login",
//   CONTACT_US = "/contactUs",
//   CLIENTS = "/clients",
//   APPLE = "/clients/apple",
//   FACEBOOK = "/clients/facebook",
//   GOOGLE = "/clients/google",
//   NOT_FOUND = "*",
// }
export interface ROUTES_DATA {
  HOME: string;
  CONTACT_US: string;
  ABOUT: string;
  LOGIN: string;
  CLIENTS: string;
  APPLE: string;
  GOOGLE: string;
  FACEBOOK: string;
  NOT_FOUND: string;
}
export const ROUTES: ROUTES_DATA = {
  HOME: "/",
  CONTACT_US: "/contactUs",
  ABOUT: "/about",
  LOGIN: "/login",
  CLIENTS: "/clients",
  APPLE: "/clients/apple",
  GOOGLE: "/clients/google",
  FACEBOOK: "/clients/facebook",
  NOT_FOUND: "*",
};
export enum NAVIGATION_MENU_ROUTES {
  Home = "/",
  Clients = "/clients",
  "Contact Us" = "/contactUs",
  About = "/about",
  Login = "/login",
}