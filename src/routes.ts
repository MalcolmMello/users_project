import { Router } from "express";
import { CreateUserController } from "./app/controllers/users/CreateUserController";
import { LoginUserController } from "./app/controllers/users/LoginUserController";
import { GetUserInfoController } from "./app/controllers/users/GetUserInfoController";
import { CreateAddressController } from "./app/controllers/address/CreateAddressController";
import { DeleteAddressController } from "./app/controllers/address/DeleteAddressController";
import { GetAllAddressesController } from "./app/controllers/address/GetAllAddressesController";
import { GetOneAddressController } from "./app/controllers/address/GetOneAddressController";
import { UpdateAddressController } from "./app/controllers/address/UpdateAddressController";
import AuthValidator from "./app/validators/AuthValidator";
import AddressValidator from "./app/validators/AddressValidator";

import JwtAuthMiddleware from "./app/middlewares/JwtAuthMiddleware";

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