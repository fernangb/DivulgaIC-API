import { getRepository } from 'typeorm';
import AreaInteresse from '../models/AreaInteresse';

interface Request {
  nome: string;
}

class CreateAreaInteresseService {
  public async execute({ nome }: Request): Promise<AreaInteresse> {
    const areaInteresseRepository = getRepository(AreaInteresse);

    const existeAreaInteresse = await areaInteresseRepository.findOne({
      where: { nome },
    });

    if (existeAreaInteresse) {
      throw new Error('Área de interesse já cadastrada');
    }

    const areaInteresse = areaInteresseRepository.create({
      nome,
    });

    await areaInteresseRepository.save(areaInteresse);

    return areaInteresse;
  }
}

export default CreateAreaInteresseService;
