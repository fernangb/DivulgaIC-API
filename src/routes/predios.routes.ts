import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import CreatePredioService from '../services/CreatePredioService';
import Predio from '../models/Predio';

const prediosRouter = Router();

prediosRouter.post('/', async (request: Request, response: Response) => {
  const { nome, endereco, sigla } = request.body;

  const createPredioService = new CreatePredioService();

  const predio = await createPredioService.execute({ nome, endereco, sigla });

  return response.json(predio);
});

prediosRouter.get('/', async (request, response) => {
  const prediosRepository = getRepository(Predio);

  const predios = await prediosRepository.find();

  return response.json(predios);
});

export default prediosRouter;
