import { Router } from 'express';
import vagasRouter from './vagas.routes';

const routes = Router();
routes.use('/vagas', vagasRouter);

export default routes;
