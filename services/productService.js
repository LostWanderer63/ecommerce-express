const products = [];

const getAllProducts = () => {
  return "Fetching all products";
};

const getProductById = (id) => {
  return `Fetching product with ID: ${id}`;
};

const addProduct = () => {
  return "Adding a new product";
};

const createProduct = (productName) => {
  const product = { id: products.length + 1, productName };
  products.push(product);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  createProduct,
};
