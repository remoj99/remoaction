import { Request, Response } from 'express-serve-static-core';

import { createUserDto } from '../dtos/CreateUser.dto';
import { CreateUserQueryParams } from '../types/query-params';

export const mockRequest = {
  params: {
    id: '1',
  },
  body: {
    username: 'jason',
    email: 'jason@gmail.com',
    password: 'asd',
  },
  query: {
    loginAfterCreate: true,
  },
} as Request<{ id: string }, object, createUserDto, CreateUserQueryParams>;

export const mockResponse = {
  send: jest.fn(), //mock the send function as a jest function
  // i am not gonna have it return anything, we trying to mock the
  // function itself, we not trying to override like what it return
  status: jest.fn(() => mockResponse),

  //mock the sendStatus method
} as unknown as Response;
