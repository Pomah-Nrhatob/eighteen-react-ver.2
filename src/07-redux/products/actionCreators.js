import * as a from "./actionTypes";

export const setLineProductsMediumList = (products) => {
  return {
    type: a.SET_LINE_PRODUCTS_MEDIUM_LIST,
    payload: products,
  };
};

export const setLineProductsSmallList = (products) => {
  return {
    type: a.SET_LINE_PRODUCTS_SMALL_LIST,
    payload: products,
  };
};

export const setProductList = (products) => {
  return {
    type: a.SET_PRODUCTS_LIST,
    payload: products,
  };
};

export const setCatalogList = (catalogs) => {
  return {
    type: a.SET_CATALOGS_LIST,
    payload: catalogs,
  };
};
