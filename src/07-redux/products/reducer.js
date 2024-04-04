import * as a from './actionTypes'
import productsNew from '../../05-data-products/data_newProducts'
import productsTrousers from '../../05-data-products/data_trousersProducts'
import catalogsList from '../../05-data-products/catalogs'

const initialStateMediumLine = productsNew
const initialStateSmallLine = productsTrousers
const initialStateProductList = productsNew
const initialStateCatalogsList = catalogsList

export const setLineProductsMediumList = (
  state = initialStateMediumLine,
  action
) => {
  switch (action.type) {
    case a.SET_LINE_PRODUCTS_MEDIUM_LIST:
      return (state = action.payload)
    default:
      return state
  }
}

export const setLineProductsSmallList = (
  state = initialStateSmallLine,
  action
) => {
  switch (action.type) {
    case a.SET_LINE_PRODUCTS_SMALL_LIST:
      return (state = action.payload)
    default:
      return state
  }
}

export const setProductList = (state = initialStateProductList, action) => {
  switch (action.type) {
    case a.SET_PRODUCTS_LIST:
      return (state = action.payload)
    default:
      return state
  }
}

export const catalogsReducer = (state = initialStateCatalogsList, action) => {
  switch (action.type) {
    case a.SET_CATALOGS_LIST:
      return (state = action.payload)
    default:
      return state
  }
}
