import { brandType,  } from "../_interfaces/AllProducts";

export async function getAllBrands(): Promise<brandType[] | null> {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/brands",
      {
        cache: "force-cache",
      }
    );
    const finalRes = await response.json();
    return finalRes.data; 
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
