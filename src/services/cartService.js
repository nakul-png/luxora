import axios from "axios";

export const getCart = async (cartId) => {
  const response = await axios.get(`/cart/${cartId}`);
  return response.data;
};

export const addCartItem = async (cartId, product) => {
  const response = await axios.post(
    `/cart/${cartId}/items`,
    product
  );

  return response.data;
};

export const removeCartItem = async (cartId, productId) => {
  const response = await axios.delete(
    `/cart/${cartId}/items/${productId}`
  );

  return response.data;
};

export const clearCartApi = async (cartId) => {
  const response = await axios.delete(
    `/cart/${cartId}`
  );

  return response.data;
};

export const updateCartItem = async (
  cartId,
  productId,
  quantity,
  size
) => {
  const response = await axios.patch(
    `/cart/${cartId}/items/${productId}`,
    {
      quantity,
      size,
    }
  );

  return response.data;
};