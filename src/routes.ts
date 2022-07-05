import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { DeleteAddressController } from "./controllers/DeleteAddressController";
import { GetAllAddressesController } from "./controllers/GetAllAddressesController";
import { GetOneAddressController } from "./controllers/GetOneAddressController";
import JwtAuthMiddleware from "./middlewares/JwtAuthMiddleware";

const routes = Router();

/* users */
routes.post("/signup", new CreateUserController().handle);
routes.post("/signin", new LoginUserController().handle);

/* addresses */
routes.post("/address", JwtAuthMiddleware, new CreateAddressController().handle);
routes.get("/address", JwtAuthMiddleware, new GetAllAddressesController().handle);
routes.get("/address/:id", JwtAuthMiddleware, new GetOneAddressController().handle);
routes.put("/address/:id", JwtAuthMiddleware,)
routes.delete("/address/:id", JwtAuthMiddleware, new DeleteAddressController().handle);


export { routes };