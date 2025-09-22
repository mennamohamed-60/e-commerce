import { categoryType } from "../_interfaces/AllProducts";

export async function getCategoryById(categoryId: string): Promise<categoryType | null> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`,
      { cache: "no-store" }
    );
    const finalRes = await response.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}