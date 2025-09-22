import Search from "../_Components/Search/Search";
import { getAllProducts } from "../_services/getAllProducts.services";

export default async function Home() {
  const allproducts = await getAllProducts();

  return (
    <>
      <Search products={allproducts}></Search>
    </>
  );
}
