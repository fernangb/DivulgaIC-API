import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateLaboratoryService from '../services/CreateLaboratoryService';
import Laboratory from '../models/Laboratory';

const laboratoriesRouter = Router();

laboratoriesRouter.post('/', async (request, response) => {
  try {
    const {
      title,
      location,
      initials,
      site,
      email,
      avatar_url,
      building_id,
    } = request.body;

    const createLaboratoryService = new CreateLaboratoryService();

    const lab = await createLaboratoryService.execute({
      title,
      location,
      initials,
      site,
      email,
      avatar_url,
      building_id,
    });

    return response.json(lab);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

laboratoriesRouter.get('/', async (request, response) => {
  const laboratoriesRepository = getRepository(Laboratory);

  const laboratories = await laboratoriesRepository.find();

  return response.json(laboratories);
});

export default laboratoriesRouter;
