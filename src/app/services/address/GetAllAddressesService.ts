import { addressRepository } from "../../repositories";

export class GetAllAddressesService {
    async execute(id: string) {
        const hasId = id;
        
        if(!hasId) {
            return new Error("Missing user id");
        };

        const addresses = await addressRepository().findBy({ user_id: id });
        
        return addresses;
    };
};