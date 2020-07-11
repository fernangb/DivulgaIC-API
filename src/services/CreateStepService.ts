import { getRepository } from 'typeorm';
import Step from '../models/Step';

interface Request {
  title: string;
}

class CreateStepService {
  public async execute({ title }: Request): Promise<Step> {
    const stepRepository = getRepository(Step);

    const existsStep = await stepRepository.findOne({
      where: { title },
    });

    if (existsStep) {
      throw new Error('Etapa já cadastrada');
    }

    const step = stepRepository.create({
      title,
    });

    await stepRepository.save(step);

    return step;
  }
}

export default CreateStepService;
