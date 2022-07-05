import { addressRepository } from "../repositories";

export class GetOneAddressService {
    async execute(id: string) {
        const hasId = id;
        
        if(!hasId) {
            return new Error("Missing address id");
        };

        const addresses = await addressRepository().findOneBy({ id });
        
        return addresses;
    };
};