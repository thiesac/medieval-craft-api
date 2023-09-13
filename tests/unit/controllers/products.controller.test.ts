import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productService from '../../../src/services/product.service';
import productController from '../../../src/controllers/product.controller';
import productMock from '../../mocks/product.mock';

chai.use(sinonChai);

describe('ProductsController', function () {
  let req: Request;
  let res: Response;

  beforeEach(function () {
    req = {} as Request;
    res = {} as Response;
    res.status = sinon.stub().returns(res); // Stub res.status to return res
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should return 201 status code and the registered product data on success', async function () {
    req.body = {
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    };

    const productServiceStub = sinon.stub(productService, 'register').resolves(productMock.newProductSuccessful);

    await productController.register(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productMock.newProductSuccessful.data);
  });

  it('should return a 200 status code and products when getAll is successful', async function () {
    const getAllStub = sinon.stub(productService, 'getAll').resolves(productMock.getAllProducts);

    await productController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productMock.getAllProducts);
  })
});
