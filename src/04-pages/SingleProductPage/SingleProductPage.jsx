import { useParams } from "react-router-dom";

function SingleProductPage() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>{params.id}</h1>
      <h1>{params.catalogSlug}</h1>
    </div>
  );
}

export default SingleProductPage;
