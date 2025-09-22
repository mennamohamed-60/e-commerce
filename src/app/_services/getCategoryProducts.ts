import { productType } from "../_interfaces/AllProducts";

export async function getCategoryProducts(categoryId: string): Promise<productType[]> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`,
      {
        cache: "no-store",
      }
    );
    const finalRes = await response.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
}