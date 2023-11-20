import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export const dataSource = new DataSource({
  //@ts-ignore
  type: process.env.DATABASE_DRIVER,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD,
  entities: [
    'dist/src/data-access/**/*.schema{.ts,.js}',
    'dist/src/data-access/*.schema{.ts,.js}',
  ],
  migrationsTableName: 'migrations_history',
  migrations: ['dist/migrations/*{.js,.ts}'],
  migrationsRun: true,
});
