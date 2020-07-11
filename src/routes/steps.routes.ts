import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateStepService from '../services/CreateStepService';
import Step from '../models/Step';

const stepsRouter = Router();

stepsRouter.post('/', async (request, response) => {
  try {
    const { title } = request.body;

    const createStepService = new CreateStepService();

    const step = await createStepService.execute({ title });

    return response.json(step);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

stepsRouter.get('/', async (request, response) => {
  const stepsRepository = getRepository(Step);

  const steps = await stepsRepository.find();

  return response.json(steps);
});

export default stepsRouter;
