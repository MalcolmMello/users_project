import { Router } from "express";
import { CreateUserController } from "../app/controllers/users/CreateUserController";
import { LoginUserController } from "../app/controllers/users/LoginUserController";
import { GetUserInfoController } from "../app/controllers/users/GetUserInfoController";
import { ForgotPasswordController } from "../app/controllers/users/ForgotPasswordController";
import { ResetPasswordController } from "../app/controllers/users/ResetPasswordController";
import AuthValidator from "../app/validators/AuthValidator";
import JwtAuthMiddleware from "../app/middlewares/JwtAuthMiddleware";

const routes = Router();

/* users */
routes.post("/signup", AuthValidator.signup, new CreateUserController().handle);
routes.post("/signin", AuthValidator.signin, new LoginUserController().handle);
routes.get("/", JwtAuthMiddleware, new GetUserInfoController().handle);
routes.post("/forgot_password", AuthValidator.forgotPassword, new ForgotPasswordController().handle);
routes.post("/reset_password/:token", AuthValidator.resetPassword, new ResetPasswordController().handle);
export default routes;