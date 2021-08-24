import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjetivesController } from './objetives.controller';
import { ObjetivesRepository } from './objetives.repository';
import { ObjetivesService } from './objetives.service';

@Module({
  imports: [TypeOrmModule.forFeature([ObjetivesRepository])],
  controllers: [ObjetivesController],
  providers: [ObjetivesService],
})
export class ObjetivesModule {}
