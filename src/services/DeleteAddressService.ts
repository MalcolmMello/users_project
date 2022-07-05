import { addressRepository } from "../repositories";

export class DeleteAddressService {
    async execute(id: string) {
        const hasId = id;

        if(!hasId) {
            return new Error("id is missing");
        };

        const existingAddress = await addressRepository().findOneBy({ id });

        if(!existingAddress) {
            return new Error("Invalid address id");
        };

        await addressRepository().delete({ id });

        const message = "Post deleted sucessfuly!";
        
        return message;
    };
};