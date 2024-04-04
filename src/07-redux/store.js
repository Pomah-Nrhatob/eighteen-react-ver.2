import { configureStore } from "@reduxjs/toolkit";
import { startBannersReducer } from "./startBanner/reducer";
import {
  catalogsReducer,
  setLineProductsMediumList,
  setLineProductsSmallList,
  setProductList,
} from "./products/reducer";

const store = configureStore({
  reducer: {
    startBanners: startBannersReducer,
    lineProductsMediumList: setLineProductsMediumList,
    lineProductsSmallList: setLineProductsSmallList,
    productsList: setProductList,
    catalogsList: catalogsReducer,
  },
});

export default store;
