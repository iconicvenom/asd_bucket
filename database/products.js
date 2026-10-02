let products = [
  { id: 1, name: 'Laptop', price: 65000 },
  { id: 2, name: 'Phone', price: 25000 },
  { id: 3, name: 'Headphones', price: 3000 }
];

const getAll = () => products;

const getById = (id) => products.find((product) => product.id === Number(id));

const create = (data) => {
  const product = {
    id: products.length ? Math.max(...products.map((item) => item.id)) + 1 : 1,
    ...data
  };
  products.push(product);
  return product;
};

const update = (id, data) => {
  const index = products.findIndex((product) => product.id === Number(id));
  if (index === -1) return null;
  products[index] = { ...products[index], ...data, id: Number(id) };
  return products[index];
};

const remove = (id) => {
  const index = products.findIndex((product) => product.id === Number(id));
  if (index === -1) return null;
  return products.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };
