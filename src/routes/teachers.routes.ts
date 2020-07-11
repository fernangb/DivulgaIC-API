import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateTeacherService from '../services/CreateTeacherService';
import Teacher from '../models/Teacher';

const teachersRouter = Router();

teachersRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      email,
      password,
      room,
      avatar_url,
      course_id,
      laboratory_id,
      area_id,
    } = request.body;

    const createTeacherService = new CreateTeacherService();

    const teacher = await createTeacherService.execute({
      name,
      email,
      password,
      room,
      avatar_url,
      course_id,
      laboratory_id,
      area_id,
    });

    return response.json(teacher);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

teachersRouter.get('/', async (request, response) => {
  const teachersRepository = getRepository(Teacher);

  const teachers = await teachersRepository.find();

  return response.json(teachers);
});

export default teachersRouter;
