import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateCourseService from '../services/CreateCourseService';
import Course from '../models/Course';

const coursesRouter = Router();

coursesRouter.post('/', async (request, response) => {
  try {
    const { title, location, initials, building_id } = request.body;

    const createCourseService = new CreateCourseService();

    const course = await createCourseService.execute({
      title,
      location,
      initials,
      building_id,
    });

    return response.json(course);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

coursesRouter.get('/', async (request, response) => {
  const coursesRepository = getRepository(Course);

  const courses = await coursesRepository.find();

  return response.json(courses);
});

export default coursesRouter;
