import { getRepository } from 'typeorm';
import Laboratory from '../models/Laboratory';

interface Request {
  title: string;
  location: string;
  initials: string;
  email?: string;
  site?: string;
  avatar_url?: string;
  building_id: string;
}

class CreateLaboratoryService {
  public async execute({
    title,
    location,
    initials,
    email,
    site,
    avatar_url,
    building_id,
  }: Request): Promise<Laboratory> {
    const labRepository = getRepository(Laboratory);

    const existsLaboratory = await labRepository.findOne({
      where: { title },
    });

    if (existsLaboratory) {
      throw new Error('Laboratório já cadastrado');
    }

    const lab = labRepository.create({
      title,
      location,
      initials,
      email,
      site,
      avatar_url,
      building_id,
    });

    await labRepository.save(lab);

    return lab;
  }
}

export default CreateLaboratoryService;
