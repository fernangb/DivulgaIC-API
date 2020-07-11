import { getRepository } from 'typeorm';
import Skill from '../models/Skill';

interface Request {
  title: string;
}

class CreateSkillService {
  public async execute({ title }: Request): Promise<Skill> {
    const skillRepository = getRepository(Skill);

    const existsSkill = await skillRepository.findOne({
      where: { title },
    });

    if (existsSkill) {
      throw new Error('Habilidade já cadastrada');
    }

    const skill = skillRepository.create({
      title,
    });

    await skillRepository.save(skill);

    return skill;
  }
}

export default CreateSkillService;
