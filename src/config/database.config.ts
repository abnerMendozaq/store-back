import { SequelizeModuleOptions } from "@nestjs/sequelize";

export const databaseConfig: SequelizeModuleOptions = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'administrador',
    database: 'prueba',
    models:[`${__dirname}/../**/*.entity.ts`]
};