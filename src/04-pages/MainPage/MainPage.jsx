import StartBanner from "../../02-organisms/StartBanner/components/StartBanner";
import LineProductMedium from "../../02-organisms/LineProductsMedium/components/LineProductsMedium";
import LineProductsSmall from "../../02-organisms/LineProductsSmall/components/LineProductsSmall";
import info_newProducts from "../../05-data-products/info_newProducts";
import info_trousersProducts from "../../05-data-products/info_trousersProducts";

function MainPage() {
  return (
    <>
      <StartBanner />
      <LineProductMedium
        name={info_newProducts.name}
        slug={info_newProducts.slug}
      />
      <LineProductsSmall
        name={info_trousersProducts.name}
        slug={info_trousersProducts.slug}
      />
    </>
  );
}

export default MainPage;
