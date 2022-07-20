import { Router } from "express";
import { CreateAddressController } from "../app/controllers/address/CreateAddressController";
import { DeleteAddressController } from "../app/controllers/address/DeleteAddressController";
import { GetAllAddressesController } from "../app/controllers/address/GetAllAddressesController";
import { GetOneAddressController } from "../app/controllers/address/GetOneAddressController";
import { UpdateAddressController } from "../app/controllers/address/UpdateAddressController";
import JwtAuthMiddleware from "../app/middlewares/JwtAuthMiddleware";
import AddressValidator from "../app/validators/AddressValidator";

const routes = Router();

routes.get("/", JwtAuthMiddleware, new GetAllAddressesController().handle);
routes.get("/:id", JwtAuthMiddleware, new GetOneAddressController().handle);
routes.post("/", JwtAuthMiddleware, AddressValidator.createAddress, new CreateAddressController().handle);
routes.put("/:id", JwtAuthMiddleware, new UpdateAddressController().handle);
routes.delete("/:id", JwtAuthMiddleware, new DeleteAddressController().handle);

export default routes;