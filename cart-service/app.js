const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const carts = {};

app.get("/", (req, res) => {
  res.json({
    message: "LUXORA Cart Service"
  });
});

app.get("/cart/:cartId", (req, res) => {
  const { cartId } = req.params;

  res.json(carts[cartId] || []);
});

app.post("/cart/:cartId/items", (req, res) => {
  const { cartId } = req.params;
  const product = req.body;

  if (!carts[cartId]) {
    carts[cartId] = [];
  }

  const existing = carts[cartId].find(
    (item) =>
      item.id === product.id &&
      item.size === product.size
  );

  if (existing) {
    existing.quantity += product.quantity;
  } else {
    carts[cartId].push(product);
  }

  res.status(201).json(carts[cartId]);
});


app.patch("/cart/:cartId/items/:productId", (req, res) => {
  const { cartId, productId } = req.params;
  const { quantity, size } = req.body;

  if (!carts[cartId]) {
    return res.json([]);
  }

  const item = carts[cartId].find(
    (item) =>
      item.id === productId &&
      item.size === size
  );

  if (!item) {
    return res.status(404).json({
      message: "Cart item not found"
    });
  }

  if (quantity <= 0) {
    carts[cartId] = carts[cartId].filter(
      (item) =>
        !(item.id === productId && item.size === size)
    );

    return res.json(carts[cartId]);
  }

  item.quantity = quantity;

  res.json(carts[cartId]);
});


app.delete("/cart/:cartId/items/:productId", (req, res) => {
  const { cartId, productId } = req.params;

  if (!carts[cartId]) {
    return res.json([]);
  }

  carts[cartId] = carts[cartId].filter(
    (item) => item.id !== productId
  );

  res.json(carts[cartId]);
});


app.delete("/cart/:cartId", (req, res) => {
  const { cartId } = req.params;

  carts[cartId] = [];

  res.json([]);
});


app.listen(5000, "0.0.0.0", () => {
  console.log("LUXORA Cart Service running on port 5000");
});