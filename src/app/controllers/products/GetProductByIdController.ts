import { Request, Response } from 'express';
import { GetProductByIdService } from '../../services/products/GetProductByIdService';

export class GetProductByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const getProductByIdService = new GetProductByIdService();

        const result = await getProductByIdService.execute(id);

        if(result instanceof Error) {
            response.status(400).json(result.message);
        };

        return response.json(result);
    }
}