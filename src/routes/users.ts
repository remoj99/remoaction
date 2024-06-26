import { Router } from 'express';
import { checkSchema } from 'express-validator';

import { createCart, createUser, getUserCart, getUsers } from '../handlers/users';
import { checkQuerySchema, createUserValidationSchema } from '../utils/validationSchemas';
const router = Router();

// /api/users
router.get('/', checkSchema(checkQuerySchema, ['query']), getUsers);
// using named function has 2 benefit here 1. easier to test 2. no need to redeifned if we want to use somewhere

// /api/users/123
//router.get('/:id', getUsersById)

// api/users

router.post('/', checkSchema(createUserValidationSchema), createUser);

router.get('/cart', getUserCart);
router.post('/cart', createCart);

export default router;
