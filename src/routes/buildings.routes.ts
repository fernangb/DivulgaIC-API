import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import CreateBuildingService from '../services/CreateBuildingService';
import Building from '../models/Building';

const buildingsRouter = Router();

buildingsRouter.post('/', async (request: Request, response: Response) => {
  const { title, address, initials } = request.body;

  const createBuildingService = new CreateBuildingService();

  const building = await createBuildingService.execute({
    title,
    address,
    initials,
  });

  return response.json(building);
});

buildingsRouter.get('/', async (request, response) => {
  const buildingsRepository = getRepository(Building);

  const buildings = await buildingsRepository.find();

  return response.json(buildings);
});

export default buildingsRouter;
