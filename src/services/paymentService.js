import axios from "axios";

const PAYMENT_API =
  process.env.NEXT_PUBLIC_PAYMENT_API ||
  "http://localhost:7000";

export const createPaymentOrder = async (amount) => {
  const response = await axios.post(
    `${PAYMENT_API}/payment/create-order`,
    {
      amount,
    }
  );

  return response.data;
};

export const verifyPayment = async (paymentData) => {
  const response = await axios.post(
    `${PAYMENT_API}/payment/verify`,
    paymentData
  );

  return response.data;
};