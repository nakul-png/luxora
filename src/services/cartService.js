import axios from "axios";

const CART_API =
  process.env.NEXT_PUBLIC_CART_API || "http://localhost:5000";

export const getCart = async (cartId) => {
  const response = await axios.get(
    `${CART_API}/cart/${cartId}`
  );

  return response.data;
};

export const addCartItem = async (cartId, product) => {
  const response = await axios.post(
    `${CART_API}/cart/${cartId}/items`,
    product
  );

  return response.data;
};

export const removeCartItem = async (cartId, productId) => {
  const response = await axios.delete(
    `${CART_API}/cart/${cartId}/items/${productId}`
  );

  return response.data;
};

export const clearCartApi = async (cartId) => {
  const response = await axios.delete(
    `${CART_API}/cart/${cartId}`
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
    `${CART_API}/cart/${cartId}/items/${productId}`,
    {
      quantity,
      size,
    }
  );

  return response.data;
};