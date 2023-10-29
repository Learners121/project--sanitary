import { Router } from 'express';
import controllers from '../controllers/index.js';

const addProductRoute = Router();

addProductRoute.post(
  '/add-item',
  controllers.addProductControllers.addProductController
);

export default addProductRoute;
