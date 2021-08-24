import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjetivesModule } from './objetives/objetives.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'PasswordO1.',
      database: 'Objetivos',
      autoLoadEntities: true,
      synchronize: true,
      options: {
        encrypt: false,
      },
    }),
    ObjetivesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
