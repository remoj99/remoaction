import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';

import usersRouter from './routes/users';

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cookieParser('testing'));
  app.use(
    session({
      secret: 'happy testing',
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000 * 60,
      },
    })
  );
  app.use('/api/users', usersRouter);

  return app;
}
