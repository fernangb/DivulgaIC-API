import { getRepository } from 'typeorm';
import Etapa from '../models/Etapa';

interface Request {
  nome: string;
}

class CreateEtapaService {
  public async execute({ nome }: Request): Promise<Etapa> {
    const etapaRepository = getRepository(Etapa);

    const existeEtapa = await etapaRepository.findOne({
      where: { nome },
    });

    if (existeEtapa) {
      throw new Error('Etapa já cadastrada');
    }

    const etapa = etapaRepository.create({
      nome,
    });

    await etapaRepository.save(etapa);

    return etapa;
  }
}

export default CreateEtapaService;
