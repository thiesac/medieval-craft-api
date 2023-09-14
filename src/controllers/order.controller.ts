import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getAll(_req: Request, res: Response) {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
}

export default {
  getAll,
};