import { addressRepository } from "../../repositories";
import { userRepository } from "../../repositories";
import { api } from '../../helpers/IsAddressReal';

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

type isAddressReal = {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    erro?: string
};

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

        const existAddress = await addressRepository().findOneBy({ zip_code });

        if(existAddress) {
            return new Error("Address already exists");
        };

        const zipcode = zip_code.replace("-", "");

        let isAddressReal: isAddressReal = await api.foundAddressByZipCode(zipcode);

        if(isAddressReal.erro) {
            return new Error("Address doesn't exist");
        };

        const matchedAddress = isAddressReal.uf === state && isAddressReal.localidade === city && isAddressReal.bairro === district && isAddressReal.logradouro === street;

        if(matchedAddress) {
            const newAddress = addressRepository().create({ user_id: userId, number, street, district, zip_code, city, state, country, longitude, latitude });
        
            await addressRepository().save(newAddress);

            const result = newAddress;

            return result;
        } else {
            return new Error("Addresses doesn't match each other");
        }
    };
};