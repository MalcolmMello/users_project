import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

routes.get("/ping", (req, res) => {
    res.send("pong")
});

routes.post("/user", new CreateUserController().handle);

export { routes };