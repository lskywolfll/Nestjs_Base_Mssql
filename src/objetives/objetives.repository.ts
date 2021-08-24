import { EntityRepository, Repository } from 'typeorm';
import { Objetive } from './entities/objetive.entity';

@EntityRepository(Objetive)
export class ObjetivesRepository extends Repository<Objetive> {
  async testProcedure() {
    const bd = this.createQueryBuilder().connection;
    const result = await bd.query(`EXEC dbo.OBTENER_OBJETIVES`);
    return result;
  }

  async testProcedureCreate(name: string) {
    const bd = this.createQueryBuilder().connection;
    const result = await bd.query(`EXEC dbo.CREAR_OBJETIVE @Name=${name}`);
    return result;
  }
}
