import { getRepository } from 'typeorm';
import Area from '../models/Area';

interface Request {
  title: string;
}

class CreateAreaService {
  public async execute({ title }: Request): Promise<Area> {
    const areaRepository = getRepository(Area);

    const existsArea = await areaRepository.findOne({
      where: { title },
    });

    if (existsArea) {
      throw new Error('Área de interesse já cadastrada');
    }

    const area = areaRepository.create({
      title,
    });

    await areaRepository.save(area);

    return area;
  }
}

export default CreateAreaService;
