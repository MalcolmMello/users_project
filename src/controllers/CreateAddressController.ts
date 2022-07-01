import { Request, Response } from 'express';

export class CreateAddressController {
    async handle(request: Request, response: Response) {
        const { number, street, district, zip_code, city, state, country, longitude, latitude } = request.body;
        const id = request.userId;

        
    }
}