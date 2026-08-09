"use client";

import { createContext, useContext, useEffect, useState } from "react";

import {
  getCart,
  addCartItem,
  updateCartItem,
  removeCartItem,
  clearCartApi,
} from "../services/cartService";

const CartContext = createContext();

const CART_ID = "luxora-demo-cart";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCart() {
      try {
        const data = await getCart(CART_ID);
        setCartItems(data);
      } catch (error) {
        console.error("Failed to load cart:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCart();
  }, []);

  async function addToCart(product) {
    try {
      const updatedCart = await addCartItem(
        CART_ID,
        product
      );

      setCartItems(updatedCart);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  }

  async function removeFromCart(id) {
    try {
      const updatedCart = await removeCartItem(
        CART_ID,
        id
      );

      setCartItems(updatedCart);
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  }

  async function clearCart() {
    try {
      const updatedCart = await clearCartApi(
        CART_ID
      );

      setCartItems(updatedCart);
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  }

  async function increaseQuantity(id) {
    try {
      const item = cartItems.find(
        (item) => item.id === id
      );

      if (!item) return;

      const updatedCart = await updateCartItem(
        CART_ID,
        item.id,
        item.quantity + 1,
        item.size
      );

      setCartItems(updatedCart);
    } catch (error) {
      console.error("Failed to increase quantity:", error);
    }
  }

  async function decreaseQuantity(id) {
    try {
      const item = cartItems.find(
        (item) => item.id === id
      );

      if (!item) return;

      const updatedCart = await updateCartItem(
        CART_ID,
        item.id,
        item.quantity - 1,
        item.size
      );

      setCartItems(updatedCart);
    } catch (error) {
      console.error("Failed to decrease quantity:", error);
    }
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}