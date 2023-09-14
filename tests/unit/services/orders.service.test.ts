// import { expect } from 'chai';
// import sinon from 'sinon';
// import OrderModel from '../../../src/database/models/order.model';
// import ProductModel from '../../../src/database/models/product.model';
// import orderService from '../../../src/services/order.service';

// describe('OrdersService', function () {
//   beforeEach(function () { sinon.restore(); });

//   it('should return orders with productIds', async function () {
//     // Prepare test data
//     const orders = [
//       { id: 1, userId: 1 },
//       { id: 2, userId: 2 },
//     ];
//     const products = [
//       { id: 10, orderId: 1 },
//       { id: 11, orderId: 1 },
//       { id: 20, orderId: 2 },
//     ];

//     // Stub OrderModel.findAll and ProductModel.findAll
//     const findAllStub = sinon
//       .stub(OrderModel, 'findAll')
//       .returns(Promise.resolve(orders.map(order => ({
//         ...order,
//         get: (key) => order[key],
//       }))));
//     const productFindAllStub = sinon
//       .stub(ProductModel, 'findAll')
//       .callsFake(async () => Promise.resolve(products.filter(p => p.orderId === 1).map(product => ({
//         ...product,
//         get: (key) => product[key],
//       }))));


//     // Call the getAll function
//     const result = await orderService.getAll();

//     // Assert the expected behavior
//     expect(findAllStub.calledOnce).to.be.true;
//     expect(productFindAllStub.calledTwice).to.be.true;
//     expect(result).to.deep.equal([
//       { id: 1, userId: 1, productIds: [10, 11] },
//       { id: 2, userId: 2, productIds: [20] },
//     ]);
//   });
// });