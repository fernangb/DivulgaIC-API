import { Router } from 'express';
import areasRouter from './areas.routes';
import stepsRouter from './steps.routes';
import skillsRouter from './skills.routes';
import buildingsRouter from './buildings.routes';
import coursesRouter from './courses.routes';
import laboratoriesRouter from './laboratories.routes';

const routes = Router();
routes.use('/areas', areasRouter);
routes.use('/steps', stepsRouter);
routes.use('/skills', skillsRouter);
routes.use('/buildings', buildingsRouter);
routes.use('/courses', coursesRouter);
routes.use('/laboratories', laboratoriesRouter);

export default routes;
