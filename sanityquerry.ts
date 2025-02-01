import { client } from "@/sanity/lib/client";

export const getProductsById = async (id: string) => {
    const query = `*[_type == "product" && _id == $id][0]{_id, productName, category, price, inventory, colors, status, description, image, discountPercentage
}`;
  
    const params = { id }; // Ensure `id` passed here matches `_id` in Sanity
    const response = await client.fetch(query,params);
    return response;
  };
  