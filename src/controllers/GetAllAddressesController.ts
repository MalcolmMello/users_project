import { Request, Response } from "express";
import { GetAllAddressesService } from "../services/GetAllAddressesService";

export class GetAllAddressesController {
    async handle(request: Request, response: Response) {
        const id = request.userId;

        const getAllAddressesService = new GetAllAddressesService();

        const result = await getAllAddressesService.execute(id);

        if(result instanceof Error) {
            response.status(400).json(result.message);
        };

        return response.json(result);
    };
};