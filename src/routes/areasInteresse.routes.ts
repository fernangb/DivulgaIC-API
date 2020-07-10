import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateAreaInteresseService from '../services/CreateAreaInteresseService';
import AreaInteresse from '../models/AreaInteresse';

const areasInteresseRouter = Router();

areasInteresseRouter.post('/', async (request, response) => {
  const { nome } = request.body;

  const createAreaInteresseService = new CreateAreaInteresseService();

  const areaInteresse = await createAreaInteresseService.execute({ nome });

  return response.json(areaInteresse);
});

areasInteresseRouter.get('/', async (request, response) => {
  const areasInteresseRepository = getRepository(AreaInteresse);

  const areasInteresse = await areasInteresseRepository.find();

  return response.json(areasInteresse);
});

export default areasInteresseRouter;
