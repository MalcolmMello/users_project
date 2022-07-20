import { Request, Response } from 'express';
import { GetProductsByCompanyIdService } from '../../services/products/GetProductByCompanyIdService';

export class GetProductsByCompanyIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const getProductByCompanyIdService = new GetProductsByCompanyIdService();

        const result = await getProductByCompanyIdService.execute(id);

        if(result instanceof Error) {
            response.status(400).json(result.message);
        };

        return response.json(result);
    }
}