import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateAreaInteresseService from '../services/CreateAreaInteresseService';
import AreaInteresse from '../models/AreaInteresse';

const areainteressesRouter = Router();

areainteressesRouter.post('/', async (request, response) => {
  const { nome } = request.body;

  const createAreaInteresseService = new CreateAreaInteresseService();

  const areainteresse = await createAreaInteresseService.execute({ nome });

  return response.json(areainteresse);
});

areainteressesRouter.get('/', async (request, response) => {
  const areainteressesRepository = getRepository(AreaInteresse);

  const areainteresses = await areainteressesRepository.find();

  return response.json(areainteresses);
});

export default areainteressesRouter;
