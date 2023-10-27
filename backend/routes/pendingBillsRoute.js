import { Router } from 'express';
import controllers from '../controllers/index.js';

const pendingBillsRoute = Router();

pendingBillsRoute.get(
  
  '/',
  
  controllers.pendingBillsControllers.pendingBillsController
);

export default pendingBillsRoute;
