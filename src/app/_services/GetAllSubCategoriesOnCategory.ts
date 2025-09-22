import {  subcategoriesType } from "../_interfaces/AllProducts";

export async function GetAllSubCategoriesOnCategory(categoryId: string): Promise<subcategoriesType[]> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`,
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