import { Request, Response } from 'express-serve-static-core';
import { matchedData, validationResult } from 'express-validator';

import { cartDto, createUserDto } from '../dtos/CreateUser.dto';
import { CreateUserQueryParams } from '../types/query-params';

export function getUsers(request: Request, response: Response) {
  const result = validationResult(request);

  // console.log(request.sessionID)
  // request.session.username = "jason"

  // request.sessionStore.get(request.sessionID, (err, sessionData) => {
  //     console.log(sessionData?.username)
  //     if (err) {
  //         throw err
  //     }
  // })
  if (!result.isEmpty()) return response.status(400).send({ errors: result.array() });
  response.send([]);
}

export function getUsersById(request: Request, response: Response) {
  response.send({});
}

export function getUserCart(request: Request, response: Response) {
  console.log(request.session.username);
  return request.session.username
    ? response.status(200).send(request.session.username)
    : response.status(401).send('Unauthorized');
}

export function createCart(request: Request<object, object, cartDto>, response: Response) {
  if (!request.session.username) return response.sendStatus(401);

  const { body: item } = request;
  const { cart } = request.session;
  if (cart) {
    cart.push(item);
  } else {
    request.session.cart = [item];
  }
  return response.status(201).send(request.session.cart);
}

export function createUser(
  request: Request<{ id: string }, object, createUserDto, CreateUserQueryParams>,
  response: Response
) {
  const result = validationResult(request);

  result.isEmpty();

  if (!result.isEmpty()) return response.status(400).send({ errors: result.array() });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = matchedData(request); // get all the data that has been validated

  request.query.loginAfterCreate;
  request.params.id;

  response.status(201).send({
    id: 1,
    username: 'jason',
    email: 'anson@gmail.com',
  });
}
