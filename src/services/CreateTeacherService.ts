import { getRepository } from 'typeorm';
import Teacher from '../models/Teacher';

interface Request {
  name: string;
  email: string;
  password: string;
  room: string;
  avatar_url: string;
  course_id: string;
  laboratory_id: string;
  area_id: string;
}

class CreateTeacherService {
  public async execute({
    name,
    email,
    password,
    room,
    avatar_url,
    course_id,
    laboratory_id,
    area_id,
  }: Request): Promise<Teacher> {
    const teacherRepository = getRepository(Teacher);

    const existsTeacher = await teacherRepository.findOne({
      where: { name },
    });

    if (existsTeacher) {
      throw new Error('Professor já cadastrado');
    }

    const teacher = teacherRepository.create({
      name,
      email,
      password,
      room,
      avatar_url,
      course_id,
      laboratory_id,
      area_id,
    });

    await teacherRepository.save(teacher);

    return teacher;
  }
}

export default CreateTeacherService;
