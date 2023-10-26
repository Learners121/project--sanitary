import { Router } from 'express';
import controllers from '../controllers/index.js';

const userRoute = Router();

userRoute.get('/', controllers.userControllers.userController)

export default userRoute;
