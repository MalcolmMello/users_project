import "reflect-metadata";
import "./db/dataSource";
import express from 'express';
import addressRoutes from './routes/address';
import userRoutes from './routes/user';
import companiesRoutes from './routes/companies';
import productsRoutes from './routes/products';
import searchRoutes from './routes/search';
import { addProductsCategories } from "./productsScript";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/address", addressRoutes);
app.use("/companies", companiesRoutes);
app.use("/products", productsRoutes);
app.use("/search", searchRoutes);

app.listen(5000, () => {
    console.log("Aplicação rodando na porta 5000");
});