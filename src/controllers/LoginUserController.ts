import { Request, Response } from 'express';
import { LoginUserService } from '../services/LoginUserService';


export class LoginUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;
        
        const loginUserService = new LoginUserService();
        const result = await loginUserService.execute({ email, password });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        };

        return response.json(result);
    };
};