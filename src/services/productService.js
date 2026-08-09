import axios from "axios";

const API = process.env.NEXT_PUBLIC_PRODUCT_API;
console.log("API =", API);
export const getProducts = async () => {
  const response = await axios.get(`${API}/products`);
  return response.data;
};

export const getProductById = async (id) => {
  const products = await getProducts();
  return products.find((product) => product.id === id);
};