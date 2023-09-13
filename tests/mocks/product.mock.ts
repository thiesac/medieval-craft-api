const newProductSuccessful = {
  status: 'SUCCESSFUL' as const, 
  data: {
    id: 1,
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    orderId: 4,
  },
};

const getAllProducts = [
  { id: 1, name: 'Product 1', price: 'Price 1', orderId: 1 },
  { id: 2, name: 'Product 2', price: 'Price 2', orderId: 2 },
];

  export default {
  newProductSuccessful,
  getAllProducts,
}