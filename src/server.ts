import "reflect-metadata";
import "./db/dataSource";
import express from 'express';
import { addAddress } from "./script";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(5000, () => {
    console.log("Aplicação rodando na porta 5000");
});


setTimeout(() => {
    addAddress()
}, 2000)