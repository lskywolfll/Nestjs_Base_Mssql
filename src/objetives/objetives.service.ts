import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateObjetiveDto } from './dto/create-objetive.dto';
import { ObjetivesRepository } from './objetives.repository';

@Injectable()
export class ObjetivesService {
  constructor(
    @InjectRepository(ObjetivesRepository)
    private readonly objetivesRepository: ObjetivesRepository,
  ) {}

  async getAll() {
    return this.objetivesRepository.find();
  }

  async create(createObjetiveDto: CreateObjetiveDto) {
    return this.objetivesRepository.testProcedureCreate(createObjetiveDto.name);
    // const objetive = this.objetivesRepository.create(createObjetiveDto);
    // return this.objetivesRepository.save(objetive);
  }

  async delete(id: number): Promise<void> {
    const result = await this.objetivesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Objetive with ID "${id}" not found`);
    }
  }

  async testing() {
    return this.objetivesRepository.testProcedure();
  }
}