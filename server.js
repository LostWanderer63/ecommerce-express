const express = require("express");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const apiRoutes = require("./routes/apiRoutes");
const { sendErrorResponse, createError } = require("./utils/response");
const { testConnection } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/api", apiRoutes);

// JSON 404 for any route not matched above
app.use((req, res) => {
  sendErrorResponse(
    res,
    createError(`Route ${req.method} ${req.originalUrl} not found`, 404)
  );
});

app.listen(PORT, async () => {
  console.log(`E-Commerce API running on http://localhost:${PORT}`);

  try {
    await testConnection();
    console.log("Connected to MySQL");
  } catch (err) {
    console.error("MySQL connection failed:", err.code || err.message);
  }
});
