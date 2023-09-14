import { Router } from 'express';
import productController from '../controllers/product.controller';
import { authMiddleware } from '../database/middlewares/auth.middleware';

const productRouter = Router();
productRouter.post('/', authMiddleware, productController.register);
productRouter.get('/', productController.getAll);

export default productRouter;