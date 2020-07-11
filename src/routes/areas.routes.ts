import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateAreaService from '../services/CreateAreaService';
import Area from '../models/Area';

const areasRouter = Router();

areasRouter.post('/', async (request, response) => {
  const { title } = request.body;

  const createAreaService = new CreateAreaService();

  const area = await createAreaService.execute({ title });

  return response.json(area);
});

areasRouter.get('/', async (request, response) => {
  const areasRepository = getRepository(Area);

  const areas = await areasRepository.find();

  return response.json(areas);
});

export default areasRouter;
