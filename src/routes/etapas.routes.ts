import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateEtapaService from '../services/CreateEtapaService';
import Etapa from '../models/Etapa';

const etapasRouter = Router();

etapasRouter.post('/', async (request, response) => {
  const { nome } = request.body;

  const createEtapaService = new CreateEtapaService();

  const etapa = await createEtapaService.execute({ nome });

  return response.json(etapa);
});

etapasRouter.get('/', async (request, response) => {
  const etapasRepository = getRepository(Etapa);

  const etapas = await etapasRepository.find();

  return response.json(etapas);
});

export default etapasRouter;
