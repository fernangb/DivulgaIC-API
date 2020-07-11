import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateSkillService from '../services/CreateSkillService';
import Skill from '../models/Skill';

const skillsRouter = Router();

skillsRouter.post('/', async (request, response) => {
  const { title } = request.body;

  const createSkillService = new CreateSkillService();

  const skill = await createSkillService.execute({ title });

  return response.json(skill);
});

skillsRouter.get('/', async (request, response) => {
  const skillsRepository = getRepository(Skill);

  const skills = await skillsRepository.find();

  return response.json(skills);
});

export default skillsRouter;
