import { IsString } from 'class-validator';

export class CreateObjetiveDto {
  @IsString()
  name: string;
}
