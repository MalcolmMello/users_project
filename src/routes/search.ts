import { Router } from "express";
import { SearchForCompanyOrProductController } from "../app/controllers/search/SearchForCompanyOrProductController";
SearchForCompanyOrProductController

const routes = Router();

routes.get("/", new SearchForCompanyOrProductController().handle);

export default routes;