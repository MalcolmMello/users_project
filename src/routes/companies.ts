import { Router } from "express";
import { GetAllCompaniesController } from "../app/controllers/companies/GetAllCompaniesController";
import { GetOneCompanyController } from "../app/controllers/companies/GetOneCompanyController";

const routes = Router();

routes.get("/", new GetAllCompaniesController().handle);
routes.get("/:id", new GetOneCompanyController().handle);

export default routes;