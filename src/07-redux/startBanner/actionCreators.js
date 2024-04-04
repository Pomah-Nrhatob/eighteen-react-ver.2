import * as a from "./actionTypes";

export const setStartBanners = (banners) => {
  return {
    type: a.SET_START_BANNERS,
    payload: banners,
  };
};
