import { Router } from 'express';
import areasRouter from './areas.routes';
import stepsRouter from './steps.routes';
import skillsRouter from './skills.routes';
import buildingsRouter from './buildings.routes';

const routes = Router();
routes.use('/areas', areasRouter);
routes.use('/steps', stepsRouter);
routes.use('/skills', skillsRouter);
routes.use('/buildings', buildingsRouter);

export default routes;
