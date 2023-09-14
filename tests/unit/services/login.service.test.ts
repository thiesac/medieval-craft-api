import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('#verifyLogin', async function () {
    const parameters = loginMock.noUsernameLoginBody;

    const serviceResponse = await loginService.verifyLogin(parameters);

    expect(serviceResponse.status).to.equal('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });
  });
});
