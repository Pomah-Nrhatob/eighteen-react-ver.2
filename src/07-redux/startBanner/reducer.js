import * as a from "./actionTypes";

let initialState = [
  {
    id: 1,
    name: "",
    img: 'url("img/DivBanners/Hero Section.png")',
  },
  {
    id: 2,
    name: "Final Sale",
    img: 'url("img/DivBanners/Banner2.png")',
  },
];

export const startBannersReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.SET_START_BANNERS:
      return (state = action.payload);
    default:
      return state;
  }
};
