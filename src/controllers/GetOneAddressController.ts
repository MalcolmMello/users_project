import { Request, Response } from "express";
import { GetOneAddressService } from "../services/GetOneAddressService";

export class GetOneAddressController {
    async handle(request: Request, response: Response) {
        const { id }  = request.params;

        const getOneAddressService = new GetOneAddressService();

        const result = await getOneAddressService.execute(id);

        if(result instanceof Error) {
            response.status(400).json(result.message);
        };

        return response.json(result);
    };
};