import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.TYPEORM_USERNAME as string,
    password: process.env.TYPEORM_PASSWORD as string,
    database: process.env.TYPEORM_DATABASE as string,
    entities: ["./src/entities/*.ts"],
    migrations: ["./src/db/migrations/*.ts"],
    logging: true,
    synchronize: true
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });
