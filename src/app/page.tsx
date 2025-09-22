
import { getAllProducts } from "./_services/getAllProducts.services";
import StaticSlider from "./_Components/StaticSlider/StaticSlider";



import CategoriesSlider from "./_Components/CategoriesSlider/CategoriesSlider";
import Search from "./_Components/Search/Search";

export default async function Home() {
  const allproducts = await getAllProducts();

  return (
    <>
      <StaticSlider></StaticSlider>

      <div className=" mt-20">
        <CategoriesSlider />
      </div>

     <Search products={allproducts} ></Search>
    </>
  );
}
