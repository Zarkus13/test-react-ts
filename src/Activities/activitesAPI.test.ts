import { fetchActivityAPI } from './api';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetching activity API should return an activity as a string', async () => {
  server.use(
    rest.get('https://www.boredapi.com/api/activity', (req, res, ctx) => {
      return res(
        ctx.json({ activity: 'Test activity' })
      );
    })
  );

  const res = await fetchActivityAPI();

  expect(res).toEqual('Test activity');
});
