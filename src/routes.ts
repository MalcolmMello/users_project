import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { CreateAddressController } from "./controllers/CreateAddressController";
import JwtAuthMiddleware from "./middlewares/JwtAuthMiddleware";

const routes = Router();

/* users */
routes.post("/signup", new CreateUserController().handle);
routes.post("/signin", new LoginUserController().handle);

/* addresses */
routes.post("/address", JwtAuthMiddleware, new CreateAddressController().handle);



export { routes };