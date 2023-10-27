import { Router } from 'express';
import controllers from '../controllers/index.js';

const billingHistoryRoute = Router();

billingHistoryRoute.get(
  '/',
  controllers.billingHistoryControllers.billingHistoryController
);

export default billingHistoryRoute;
