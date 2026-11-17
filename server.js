const express = require("express");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const apiRoutes = require("./routes/apiRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/api", apiRoutes);

// Unmatched routes -> 404, then every error funnels into one handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`E-Commerce API running on http://localhost:${PORT}`);
});
