export const dbConfig = () => ({
  database: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
    pg: {
      type: process.env.DATABASE_DRIVER,
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE,
      password: process.env.DATABASE_PASSWORD,
      entities: [
        'dist/src/data-access/**/*.schema{.ts,.js}',
        'dist/src/data-access/*.schema.ts',
      ],
      autoLoadEntities: true,
      migrations: ['dist/migrations/*{.js,.ts}'],
      migrationsRun: true,
      migrationsTableName: 'migrations_history',
      logging: true
    },
  },
});
