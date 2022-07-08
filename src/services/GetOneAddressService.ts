import { addressRepository } from "../repositories";

type GetOneAddress = {
    id: string,
    userId: string
};

export class GetOneAddressService {
    async execute({id, userId}: GetOneAddress) {
        const hasId = id;
        
        if(!hasId) {
            return new Error("Missing address id");
        };

        const addresses = await addressRepository().findOneBy({ id, user_id: userId });
        
        if(addresses == null) {
            return new Error("No addresses with that id");
        };

        return addresses;
    };
};