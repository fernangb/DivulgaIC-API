import { getRepository } from 'typeorm';
import Predio from '../models/Predio';

interface Request {
  nome: string;
  endereco: string;
  sigla: string;
}

class CreatePredioService {
  public async execute({ nome, endereco, sigla }: Request): Promise<Predio> {
    const predioRepository = getRepository(Predio);

    const existePredio = await predioRepository.findOne({
      where: { nome },
    });

    if (existePredio) {
      throw new Error('Prédio já cadastrado');
    }

    const predio = predioRepository.create({
      nome,
      endereco,
      sigla,
    });

    await predioRepository.save(predio);

    return predio;
  }
}

export default CreatePredioService;
