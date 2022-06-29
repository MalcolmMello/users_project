import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { LoginUserController } from "./controllers/LoginUserController";

const routes = Router();

routes.get("/ping", (req, res) => {
    res.send("pong")
});

routes.post("/signup", new CreateUserController().handle);
routes.post("/signin", new LoginUserController().handle);



export { routes };