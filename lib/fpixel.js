import ReactPixel from "react-facebook-pixel";

export const FB_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};

export const init = () => {
  ReactPixel.init(FB_PIXEL_ID);
};
