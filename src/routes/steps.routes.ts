import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateStepService from '../services/CreateStepService';
import Step from '../models/Step';

const stepsRouter = Router();

stepsRouter.post('/', async (request, response) => {
  const { title } = request.body;

  const createStepService = new CreateStepService();

  const etapa = await createStepService.execute({ title });

  return response.json(etapa);
});

stepsRouter.get('/', async (request, response) => {
  const stepsRepository = getRepository(Step);

  const steps = await stepsRepository.find();

  return response.json(steps);
});

export default stepsRouter;
