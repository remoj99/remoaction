import { createApp } from './createApp';

const app = createApp();

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

const onCloseSignal = () => {
  console.log('sigint received, shutting down');
  server.close(() => {
    console.log('server closed');
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
