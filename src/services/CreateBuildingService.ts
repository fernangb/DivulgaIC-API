import { getRepository } from 'typeorm';
import Building from '../models/Building';

interface Request {
  title: string;
  address: string;
  initials: string;
}

class CreateBuildingService {
  public async execute({
    title,
    address,
    initials,
  }: Request): Promise<Building> {
    const buildingRepository = getRepository(Building);

    const existeBuilding = await buildingRepository.findOne({
      where: { title },
    });

    if (existeBuilding) {
      throw new Error('Prédio já cadastrado');
    }

    const building = buildingRepository.create({
      title,
      address,
      initials,
    });

    await buildingRepository.save(building);

    return building;
  }
}

export default CreateBuildingService;
