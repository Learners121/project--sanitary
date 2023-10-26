import { Router } from 'express';
import controllers from '../controllers/index.js';

const pendingBillsRoute = Router();

pendingBillsRoute.get(
  
  '/',
  
  controllers.pendingBillsController.pendingBillsController
);

export default pendingBillsRoute;
