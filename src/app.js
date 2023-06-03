/* eslint-disable no-console */
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors());
app.use(compression());

app.use('/test', (req, res, next) => {
  // console.log(req);
  res.status(200).json({
    message: 'test ok',
  });
});

app.use((req, res, next) => {
  const error = new Error(`Endpoint ${req.path} not found`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log('ERROR HANDLER: ', err);
});

export { app };
