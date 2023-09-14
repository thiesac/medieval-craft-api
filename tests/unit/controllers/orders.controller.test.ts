import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import orderService from '../../../src/services/order.service';
import orderController from '../../../src/controllers/order.controller';
import orderServiceMock from '../../mocks/order.mock';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should return orders with associated product ids', async function () {
    const orderServiceStub = sinon.stub(orderService, 'getAll').resolves([
      { id: 1, userId: 101, productIds: [1011, 1012] },
      { id: 2, userId: 102, productIds: [1021, 1022] },
    ]);

    // Call the getAll function from orderController
    await orderController.getAll(req, res);

    // Verify that orderService.getAll was called once
    expect(orderServiceStub).to.have.been.calledOnce;

    // Verify that the response status was set to 200
    expect(res.status).to.have.been.calledWith(200);

    // Verify that the response json method was called with the expected data
    expect(res.json).to.have.been.calledWith([
      { id: 1, userId: 101, productIds: [1011, 1012] },
      { id: 2, userId: 102, productIds: [1021, 1022] },
    ]);
  });
  })
