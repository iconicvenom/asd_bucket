const database = require('../database/products');

const getProducts = () => database.getAll();

const getProduct = (id) => database.getById(id);

const createProduct = (data) => database.create(data);

const updateProduct = (id, data) => database.update(id, data);

const deleteProduct = (id) => database.remove(id);

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
