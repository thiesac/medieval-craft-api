import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

async function getAll(): Promise<Order[]> {
  const orders = await OrderModel.findAll({
    attributes: ['id', 'userId'],
  });

  const ordersWithProductIds = await Promise.all(
    orders.map(async (order) => {
      const productIds = await ProductModel.findAll({
        where: { orderId: order.get('id') as number },
        attributes: ['id'],
      });

      return {
        id: order.get('id') as number,
        userId: order.get('userId') as number,
        productIds: productIds.map((product) => product.get('id') as number),
      } as Order;
    }),
  );

  return ordersWithProductIds;
}

export default {
  getAll,
};