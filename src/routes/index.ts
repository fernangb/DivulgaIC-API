import { Router } from 'express';
import areasInteresseRouter from './areasInteresse.routes';
import etapasRouter from './etapas.routes';
import habilidadesRouter from './habilidades.routes';
import prediosRouter from './predios.routes';
import vagasRouter from './vagas.routes';

const routes = Router();
routes.use('/areasInteresse', areasInteresseRouter);
routes.use('/etapas', etapasRouter);
routes.use('/habilidades', habilidadesRouter);
routes.use('/predios', prediosRouter);
routes.use('/vagas', vagasRouter);

export default routes;
