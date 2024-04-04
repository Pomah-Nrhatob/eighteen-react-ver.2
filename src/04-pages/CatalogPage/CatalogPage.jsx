import { useParams } from "react-router-dom";
import catalogs from "../../05-data-products/catalogs";

function CatalogPage() {
  const params = useParams();
  const catalog = catalogs.find(
    (catalog) => catalog.slug === params.catalogSlug
  );

  if (catalog) {
    return <h1>{catalog.name}</h1>;
  }
}

export default CatalogPage;
