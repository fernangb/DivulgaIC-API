import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateHabilidadeService from '../services/CreateHabilidadeService';
import Habilidade from '../models/Habilidade';

const habilidadesRouter = Router();

habilidadesRouter.post('/', async (request, response) => {
  const { nome } = request.body;

  const createHabilidadeService = new CreateHabilidadeService();

  const habilidade = await createHabilidadeService.execute({ nome });

  return response.json(habilidade);
});

habilidadesRouter.get('/', async (request, response) => {
  const habilidadesRepository = getRepository(Habilidade);

  const habilidades = await habilidadesRepository.find();

  return response.json(habilidades);
});

export default habilidadesRouter;
