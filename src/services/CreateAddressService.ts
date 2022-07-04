import { addressRepository } from "../repositories";
import { userRepository } from "../repositories";

type CreateAddress = {
    userId: string,
    number: string,
    street: string,
    district: string,
    zip_code: string,
    city: string,
    state: string,
    country: string,
    longitude: number,
    latitude: number
}

export class CreateAddressService {
    async execute({ userId, number, street, district, zip_code, city, state, country, longitude, latitude }: CreateAddress) {
        const hasAllData = userId && number && street && district && zip_code && city && state && country && longitude && latitude;

        if(!hasAllData) {
            return new Error("Missing address's informations");
        };

        const existUser = await userRepository().findOneBy({ id: userId });

        if(!existUser) {
            return new Error("User doesn't exists");
        };

        const newAddress = addressRepository().create({ user_id: userId, number, street, district, zip_code, city, state, country, longitude, latitude });
        
        await addressRepository().save(newAddress);

        const result = newAddress;

        return result;
    };
};