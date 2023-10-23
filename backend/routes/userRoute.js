import { Router } from 'express';

const userRoute = Router();

userRoute.get('/', (req, res) => {
  res.send('working');
});

export default userRoute;
