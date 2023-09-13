import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service'
import productMock from '../../mocks/product.mock';

describe('ProductsService', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should return a successful response when valid data is provided', async function () {
    const mockProduct = {
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    };

    const createStub = sinon.stub().resolves({ dataValues: mockProduct });

    sinon.replace(ProductModel, 'create', createStub);

    const response = await productService.register(mockProduct);

    expect(createStub).to.have.been.calledWith(mockProduct);

    expect(response.status).to.equal('SUCCESSFUL');
    expect(response.data).to.deep.equal(mockProduct);
  });
});
