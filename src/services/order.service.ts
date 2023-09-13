// import { Request, Response } from 'express';
import OrderModel from '../database/models/order.model';
import { Order } from '../types/Order';

async function getAll(): Promise<Order[]> {
  const orders = await OrderModel.findAll();
  return orders.map((order) => order.toJSON());
}

export default {
  getAll,
};