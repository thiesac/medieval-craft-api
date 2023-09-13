import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router();
productRouter.post('/', productController.register);
productRouter.get('/', productController.getAll);

export default productRouter;