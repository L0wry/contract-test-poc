/**
 * @jest-environment node
 */

import path from 'path'
import { Pact } from '@pact-foundation/pact'
import { Matchers} from '@pact-foundation/pact'
import { fetchUsers } from './user-api'

const PORT = 4000; 
const URL = process.env.BASE_URL || 'http://localhost';

const endpoint = {
 URL,
 PORT
};

const provider = new Pact({
  consumer: 'app-users',
  provider: 'user-service',
  port: PORT,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'ERROR',
  spec: 2,
});

const userExpectation = Matchers.eachLike({
  name: 'name',
  password: 'password',
  age: 10
}, {
  min: 5,
})

describe('api Queries', () => {
    beforeAll(() => provider.setup().then(() => provider.addInteraction({
      state: 'i have a list of users',
      uponReceiving: 'a request to list all users',
      withRequest: {
        method: 'GET',
        path: '/users',
      },
      willRespondWith: {
        status: 200,
        body: userExpectation,
      },
    })))

    it('should return the correct data', async () => {
      const response = await fetchUsers(endpoint);

      const [{name, password, age}] = response;
      expect(name).toEqual('name');
      expect(password).toEqual('password');
      expect(age).toEqual(10);

    });

  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());
}); 

