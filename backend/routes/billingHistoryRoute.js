import { Router } from 'express';

const billingHistoryRoute = Router();

billingHistoryRoute.get('/', (req, res) => {
  res.send('working');
});

export default billingHistoryRoute;
