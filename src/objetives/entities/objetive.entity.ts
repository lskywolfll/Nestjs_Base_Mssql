import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Objetive {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
