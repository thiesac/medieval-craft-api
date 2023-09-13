import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

function validateParams({
  name,
  price,
  orderId,
}: ProductInputtableTypes): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price is required';
  if (!orderId) return 'userId is required';

  /* Se o objeto for válido retorna nulo. */
  return null;
}

async function register(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  let responseService: ServiceResponse<Product>;
  const error = validateParams(product);
  
  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }

  const newRegister = await ProductModel.create(product);

  responseService = { status: 'SUCCESSFUL', data: newRegister.dataValues };
  return responseService;
}

async function getAll(): Promise<Product[]> {
  const products = await ProductModel.findAll();
  return products.map((product) => product.toJSON());
}

export default {
  register,
  getAll,
};