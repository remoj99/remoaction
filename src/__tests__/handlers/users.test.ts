import { Request } from 'express-serve-static-core';
import * as validator from 'express-validator';

import { mockRequest, mockResponse } from '../../__mocks__';
import { createUser, getUsers } from '../../handlers/users';

jest.mock('express-validator', () => ({
  validationResult: jest.fn(() => ({
    isEmpty: jest.fn(() => true),
    array: jest.fn((): validator.FieldValidationError[] => [
      { type: 'field', location: 'body', path: 'fieldName', value: '', msg: 'invalid username' },
    ]),
  })),
  matchedData: jest.fn(() => ({
    username: 'jason',
    email: 'jason@gmail.com',
    password: 'asd',
  })),
}));

describe('getUsers', () => {
  it('should return an array of users', () => {
    const copyMockRequest = {} as Request;
    getUsers(copyMockRequest, mockResponse);
    // in order for it to pass, we need to maske sure the res sending back an array
    // if getusers is asyn fn then we need to await it
    // await getusers() before we write assertation

    // i want to make sure mockresponse.send was called with empty array
    // bascilly i am asserting  this getuser fn whenever
    //i called it it is returning an empty array
    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});

describe('create User', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 201 status code if user is sucessfully created', () => {
    createUser(mockRequest, mockResponse);

    expect(validator.validationResult).toHaveBeenCalledWith(mockRequest);
    expect(validator.matchedData).toHaveBeenCalledWith(mockRequest);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.send).toHaveBeenCalledWith({
      id: 1,
      username: 'jason',
      email: 'anson@gmail.com',
    });
  }),
    it('should return 400 status code if error occur', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      jest.spyOn(validator, 'validationResult').mockImplementationOnce(() => ({
        isEmpty: jest.fn(() => false),
        array: jest.fn((): validator.FieldValidationError[] => [
          { type: 'field', location: 'body', path: 'fieldName', value: '', msg: 'invalid username' },
        ]),
      }));

      createUser(mockRequest, mockResponse);

      expect(validator.validationResult).toHaveBeenCalledWith(mockRequest);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.send).toHaveBeenCalledWith({
        errors: [{ type: 'field', location: 'body', path: 'fieldName', value: '', msg: 'invalid username' }],
      });
    });
});
