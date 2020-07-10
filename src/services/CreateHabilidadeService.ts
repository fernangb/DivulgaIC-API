import { getRepository } from 'typeorm';
import Habilidade from '../models/Habilidade';

interface Request {
  nome: string;
}

class CreateHabilidadeService {
  public async execute({ nome }: Request): Promise<Habilidade> {
    const habilidadeRepository = getRepository(Habilidade);

    const existeHabilidade = await habilidadeRepository.findOne({
      where: { nome },
    });

    if (existeHabilidade) {
      throw new Error('Habilidade já cadastrada');
    }

    const habilidade = habilidadeRepository.create({
      nome,
    });

    await habilidadeRepository.save(habilidade);

    return habilidade;
  }
}

export default CreateHabilidadeService;
