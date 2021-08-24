import { EntityRepository, Repository } from 'typeorm';
import { Objetive } from './entities/objetive.entity';

@EntityRepository(Objetive)
export class ObjetivesRepository extends Repository<Objetive> {
  async getAll() {
    const result = await this.query(`EXEC dbo.OBTENER_OBJETIVES`);
    return result;
  }

  async createObjetive(name: string) {
    const result = await this.query(`EXEC dbo.CREAR_OBJETIVE @Name=${name}`);
    return result;
  }
}
