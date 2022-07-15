import { addressRepository } from "../../repositories";

type DeleteAddress = {
    id: string,
    userId: string
};

export class DeleteAddressService {
    async execute({id, userId}: DeleteAddress) {
        const hasId = id;

        if(!hasId) {
            return new Error("id is missing");
        };

        const existingAddress = await addressRepository().findOneBy({ id, user_id: userId });

        if(!existingAddress) {
            return new Error("Invalid address id");
        };

        await addressRepository().delete({ id });

        const message = "Post deleted sucessfuly!";
        
        return message;
    };
};