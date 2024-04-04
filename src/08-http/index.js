import axios from "axios";

const CATALOG_URL = "http://localhost:8080/api/catalogs";

export const getCatalogs = axios({
  url: `${CATALOG_URL}/4`,
  method: "GET",
  params: { offset: 0, limit: 100 },
});
