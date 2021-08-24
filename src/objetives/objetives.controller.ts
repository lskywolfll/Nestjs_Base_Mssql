import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateObjetiveDto } from './dto/create-objetive.dto';
import { Objetive } from './entities/objetive.entity';
import { ObjetivesService } from './objetives.service';

@Controller('objetives')
export class ObjetivesController {
  constructor(private readonly objetivesService: ObjetivesService) {}

  @Get()
  getObjetives(): Promise<Objetive[]> {
    return this.objetivesService.getAll();
  }

  @Get('/test')
  testing() {
    return this.objetivesService.testing();
  }

  @Post()
  create(@Body() createObjetiveDto: CreateObjetiveDto) {
    return this.objetivesService.create(createObjetiveDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.objetivesService.delete(id);
  }
}
