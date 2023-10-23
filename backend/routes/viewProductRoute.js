import { Router } from 'express';

const viewProductRoute = Router();

viewProductRoute.get('/', (req, res) => {
  res.send('working');
});

export default viewProductRoute;
