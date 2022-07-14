import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { GetUserInfoController } from "./controllers/GetUserInfoController";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { DeleteAddressController } from "./controllers/DeleteAddressController";
import { GetAllAddressesController } from "./controllers/GetAllAddressesController";
import { GetOneAddressController } from "./controllers/GetOneAddressController";
import { UpdateAddressController } from "./controllers/UpdateAddressController";
import AuthValidator from "./validators/AuthValidator";
import AddressValidator from "./validators/AddressValidator";

import JwtAuthMiddleware from "./middlewares/JwtAuthMiddleware";

const routes = Router();

/* users */
routes.post("/signup", AuthValidator.signup, new CreateUserController().handle);
routes.post("/signin", AuthValidator.signin, new LoginUserController().handle);
routes.get("/user", JwtAuthMiddleware, new GetUserInfoController().handle);

/* addresses */
routes.get("/address", JwtAuthMiddleware, new GetAllAddressesController().handle);
routes.get("/address/:id", JwtAuthMiddleware, new GetOneAddressController().handle);
routes.post("/address", JwtAuthMiddleware, AddressValidator.createAddress, new CreateAddressController().handle);
routes.put("/address/:id", JwtAuthMiddleware, new UpdateAddressController().handle);
routes.delete("/address/:id", JwtAuthMiddleware, new DeleteAddressController().handle);


export { routes };