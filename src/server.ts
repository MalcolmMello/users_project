import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
    res.send("Olá, startup!")
});

app.listen(5000, () => {
    console.log("Aplicação rodando na porta 5000");
});