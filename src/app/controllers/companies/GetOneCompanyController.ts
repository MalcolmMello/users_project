import { Request, Response } from "express";
import { GetOneCompanyService } from "../../services/companies/GetOneCompanyService";

export class GetOneCompanyController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const getOneCompanyService = new GetOneCompanyService();

        const result = await getOneCompanyService.execute(id);

        if(result instanceof Error) {
            response.status(400).json(result.message);
        };

        return response.json(result);
    }
}