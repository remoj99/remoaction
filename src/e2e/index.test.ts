import { Express } from 'express-serve-static-core';
import request from 'supertest';

import { createApp } from '../createApp';

describe('/api/users', () => {
  let app: Express;

  beforeAll(() => {
    //jest lifecycle hook
    app = createApp();
  });

  it('shoutld return an empty array when getting /api/users', async () => {
    const response = await request(app).get('/api/users');
    console.log(response.body);
    console.log("hi");
    console.log(response.headers);
    expect(response.body).toStrictEqual([]);
  });
});
