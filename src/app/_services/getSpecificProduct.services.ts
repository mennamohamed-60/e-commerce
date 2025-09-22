
import { productType } from '../_interfaces/AllProducts';
export  async function getSpecificProduct(id:string) : Promise<productType|null> {
    try {
      const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
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
