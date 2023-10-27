import { Router } from 'express';
import controllers from '../controllers/index.js';

const billingHistoryRoute = Router();

billingHistoryRoute.get(
  '/',
  controllers.billingHistoryControllers.getBillingHistoryController
);

billingHistoryRoute.post(
  '/edit-item',
  controllers.billingHistoryControllers.editBillingHistoryController
);

billingHistoryRoute.post(
  '/delete-item',
  controllers.billingHistoryControllers.deleteBillingHistoryController
);

export default billingHistoryRoute;
