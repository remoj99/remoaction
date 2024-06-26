// ./src/typings/express-session/index.d.ts
import 'express-session'; // don't forget to import the original module

import { cartDto } from '../../dtos/CreateUser.dto';

declare module 'express-session' {
  interface SessionData {
    username: string;
    cart: cartDto[]; // whatever property you like
  }
}

// Make sure your tsconfig.json's typeroots declares custom types first, before the node_modules's.
// "typeRoots": ["./src/typings", "./node_modules/@types"]
// Declare definition file
// // ./src/typings/express-session/index.d.ts
// import "express-session"; // don't forget to import the original module

// declare module "express-session" {
//     interface SessionData {
//         username: string // whatever property you like
//     }
// }
// That should be enough, hope this helps everyone who is stuck on Typescript hole 😄
