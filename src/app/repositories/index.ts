import {AppDataSource} from "../../db/dataSource";
import { Address } from "../entities/Addresses";
import { User } from "../entities/User";

export const userRepository = () => {
    return AppDataSource.getRepository(User);
};

export const addressRepository = () => {
    return AppDataSource.getRepository(Address);
};