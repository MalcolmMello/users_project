import { hash } from "bcryptjs";
import { userRepository } from "../repositories";

type CreateUser = {
    username: string,
    email: string,
    password: string,
    phone_number: string
};

export class CreateUserService {
    async execute({ username, password, email, phone_number }: CreateUser) {
        const existUser = await userRepository().findOneBy({ email });

        if(existUser) {
            return new Error("User already exists");
        };

        const passwordHash = await hash(password, 8);

        const user = userRepository().create({ username, password: passwordHash, email, phone_number });

        await userRepository().save(user);

        return user;
    };
};