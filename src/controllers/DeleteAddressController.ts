import { Request, Response } from 'express';
import { DeleteAddressService } from '../services/DeleteAddressService';

export class DeleteAddressController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const deleteAddressService = new DeleteAddressService;
        
        const result = await deleteAddressService.execute(id);

        if(result instanceof Error) {
            response.status(400).json(result.message);
        };

        response.json(result);
    };
}