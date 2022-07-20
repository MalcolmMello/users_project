import "reflect-metadata";
import "./db/dataSource";
import express from 'express';
import addressRoutes from './routes/address';
import userRoutes from './routes/user';
import companiesRoutes from './routes/companies';
import productsRoutes from './routes/products';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/address", addressRoutes);
app.use("/companies", companiesRoutes);
app.use("/products", productsRoutes);

app.listen(5000, () => {
    console.log("Aplicação rodando na porta 5000");
});
