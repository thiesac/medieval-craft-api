import bcrypt from 'bcryptjs';
import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';
import UserModel from '../../../src/database/models/user.model';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return error if username is invalid', async function () {
    const parameters = loginMock.noUsernameLoginBody;

    const serviceResponse = await loginService.verifyLogin(parameters);

    expect(serviceResponse.status).to.equal('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });
  });

  it('should return token when username and password are valid', async function () {
    const parameters = loginMock.validLoginBody;
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const serviceResponse = await loginService.verifyLogin(parameters);

    expect(serviceResponse.status).to.equal('SUCCESSFUL');
  })
});
