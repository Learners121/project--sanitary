import { Router } from 'express';
import controllers from '../controllers/index.js'
const viewProductRoute = Router();

viewProductRoute.get('/', controllers.viewProductControllers.viewProducController)

export default viewProductRoute;
