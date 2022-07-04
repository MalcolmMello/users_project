import { Request, Response } from 'express';
import { CreateAddressService } from '../services/CreateAddressService';

export class CreateAddressController {
    async handle(request: Request, response: Response) {
        const { number, street, district, zip_code, city, state, country, longitude, latitude } = request.body;
        const userId = request.userId;
        
        const createAddressService = new CreateAddressService();
        
        const lon = Number(longitude);
        const lat = Number(latitude);
        
        const result = await createAddressService.execute({ userId, number, street, district, zip_code, city, state, country, longitude: lon, latitude: lat });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        };

        return response.json(result);
    };
};