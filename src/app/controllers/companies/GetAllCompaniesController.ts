import { Request, Response } from "express";
import { GetAllCompaniesService } from "../../services/companies/GetAllCompaniesService";

export class GetAllCompaniesController {
    async handle(request: Request, response: Response) {
        const getAllCompaniesService = new GetAllCompaniesService();

        const result = await getAllCompaniesService.execute();

        if(result instanceof Error) {
            response.status(400).json(result.message);
        };

        return response.json(result);
    }
}