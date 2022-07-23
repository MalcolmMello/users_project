import { AppDataSource } from "../../db/dataSource";
import { Address } from "../entities/Addresses";
import { CompanyAddress } from "../entities/CompaniesAddresses";
import { Companies } from "../entities/Companies";
import { Products } from '../entities/Products';
import { User } from "../entities/User";
import { Categories } from "../entities/Categories";

export const userRepository = () => {
    return AppDataSource.getRepository(User);
};

export const addressRepository = () => {
    return AppDataSource.getRepository(Address);
};

export const companiesRepository = () => {
    return AppDataSource.getRepository(Companies);
};

export const companiesAddressRepository = () => {
    return AppDataSource.getRepository(CompanyAddress);
};

export const productsRepository = () => {
    return AppDataSource.getRepository(Products);
};

export const categoriesRepository = () => {
    return AppDataSource.getRepository(Categories);
};