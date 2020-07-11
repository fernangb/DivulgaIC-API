import { getCustomRepository, getRepository } from 'typeorm';
import Course from '../models/Course';
import BuildingsRepository from '../repositories/BuildingRepository';

interface Request {
  title: string;
  location: string;
  initials: string;
  building_id: string;
}

class CreateCourseService {
  public async execute({
    title,
    location,
    initials,
    building_id,
  }: Request): Promise<Course> {
    const courseRepository = getRepository(Course);
    const buildingsRepository = getCustomRepository(BuildingsRepository);

    const existsBuilding = buildingsRepository.findBuilding(building_id);

    if (!existsBuilding) {
      throw new Error('Prédio não existe');
    }

    const existsCourse = await courseRepository.findOne({
      where: { title },
    });

    if (existsCourse) {
      throw new Error('Curso já cadastrado');
    }

    const course = courseRepository.create({
      title,
      location,
      initials,
      building_id,
    });

    await courseRepository.save(course);

    return course;
  }
}

export default CreateCourseService;
