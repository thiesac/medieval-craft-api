import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function register(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productService.register({ name, price, orderId });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  res.status(201).json(serviceResponse.data);
}

async function getAll(_req: Request, res: Response) {
  const products = await productService.getAll();
  res.status(200).json(products);
}

export default {
  register,
  getAll,
};