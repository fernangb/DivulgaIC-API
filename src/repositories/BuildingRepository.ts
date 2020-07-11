import { EntityRepository, Repository } from 'typeorm';
import Building from '../models/Building';

@EntityRepository(Building)
class BuildingsRepository extends Repository<Building> {
  public async findBuilding(id: string): Promise<Building | null> {
    const existsBuilding = await this.findOne({
      where: { id },
    });

    return existsBuilding || null;
  }
}

export default BuildingsRepository;
