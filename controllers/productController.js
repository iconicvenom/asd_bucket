const productService = require('../services/productService');

const getProducts = (req, res) => {
  res.json(productService.getProducts());
};

const getProduct = (req, res) => {
  const product = productService.getProduct(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

const createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  const product = productService.createProduct({ name, price });
  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  const product = productService.updateProduct(req.params.id, req.body);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

const deleteProduct = (req, res) => {
  const product = productService.deleteProduct(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product deleted', product });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
