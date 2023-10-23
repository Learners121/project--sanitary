import { Router } from 'express';

const addProductRoute = Router();

addProductRoute.get('/', (req, res) => {
  res.send('working');
});

export default addProductRoute;
