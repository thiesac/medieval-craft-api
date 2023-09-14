import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginMock from '../../mocks/login.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Token } from '../../../src/types/Token';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const messageUsernameOrPasswordEmpty = '"username" and "password" are required';
  const messageUsernameOrPasswordInvalid = 'UNAUTHORIZED';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should return error when receiving no username', async function () {
    req.body = loginMock.noUsernameLoginBody;
    const serviceResponse: ServiceResponse<Token> = {
      status: 'INVALID_DATA',
      data: { message: messageUsernameOrPasswordEmpty },
    }
    sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: messageUsernameOrPasswordEmpty });
  })

  it('should return a login token when receiving valid username and passowrd', async function () {
    
  })
});
