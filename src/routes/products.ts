import { Router } from "express";
import { GetProductByIdController } from "../app/controllers/products/GetProductByIdController";
import { GetProductsByCompanyIdController } from "../app/controllers/products/GetProductsByCompanyIdController";

const routes = Router();

routes.get("/company/:id", new GetProductsByCompanyIdController().handle);
routes.get("/:id", new GetProductByIdController().handle);

export default routes;