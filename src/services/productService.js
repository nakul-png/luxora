import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("/products/");
  return response.data;
};

export const getProductById = async (id) => {
  const products = await getProducts();
  return products.find((product) => product.id === id);
};