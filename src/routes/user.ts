import { Router } from "express";
import { CreateUserController } from "../app/controllers/users/CreateUserController";
import { LoginUserController } from "../app/controllers/users/LoginUserController";
import { GetUserInfoController } from "../app/controllers/users/GetUserInfoController";
import AuthValidator from "../app/validators/AuthValidator";
import JwtAuthMiddleware from "../app/middlewares/JwtAuthMiddleware";

const routes = Router();

/* users */
routes.post("/signup", AuthValidator.signup, new CreateUserController().handle);
routes.post("/signin", AuthValidator.signin, new LoginUserController().handle);
routes.get("/", JwtAuthMiddleware, new GetUserInfoController().handle);


export default routes;