import { Router } from 'express';

const pendingBillsRoute = Router();

pendingBillsRoute.get('/', (req, res) => {
  res.send('working');
});

export default pendingBillsRoute;
