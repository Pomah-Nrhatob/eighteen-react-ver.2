import MainLayout from "../MainLayout/MainLayout";
import MainPage from "../MainPage/MainPage";
import Catalog from "../Catalog/Catalog";
import Lookbook from "../Lookbook/Lookbook";
import Shops from "../Shops/Shops";
import FavoritePage from "../FavoritePage/FavoritePage";
import BascketPage from "../BascketPage/BascketPage";
import CatalogPage from "../CatalogPage/CatalogPage";
import SingleProductPage from "../SingleProductPage/SingleProductPage";
import {
  BASCKET_ROUTE,
  SHOPS_ROUTE,
  MAIN_PAGE_ROUTE,
  FAVORITE_ROUTE,
  CATALOG_ROUTE,
  LOOKBOOK_ROUTE,
} from "../../06-utils/consts";

export const routes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainLayout,
  },
  {
    path: CATALOG_ROUTE,
    Component: Catalog,
  },
  {
    path: LOOKBOOK_ROUTE,
    Component: Lookbook,
  },
  {
    path: SHOPS_ROUTE,
    Component: Shops,
  },
  {
    path: FAVORITE_ROUTE,
    Component: FavoritePage,
  },
  {
    path: BASCKET_ROUTE,
    Component: BascketPage,
  },
  {
    path: CATALOG_ROUTE + `/:catalogSlug`,
    Component: CatalogPage,
  },
  {
    path: CATALOG_ROUTE + `/:catalogSlug/:id`,
    Component: SingleProductPage,
  },
];
