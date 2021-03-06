import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JwtAuthMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const authorizationHeader = request.headers['authorization'];

        if(!authorizationHeader) {
            throw new Error("Token is missing");
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if(authenticationType !== 'Bearer' || !token) {
            throw new Error("Invalid authentication type");
        };

        try {
            const decodedData = jwt.verify(token, 'teste');

            if(typeof decodedData !== 'object' || !decodedData.id) {
                return response.json({ message: "Invalid Token" });
            };

            request.userId = decodedData.id;
            next();
        } catch (error) {
            if(error instanceof Error) {
                return response.json({ message: error.message });     
            } else {
                return response.json({ message: "Something went wrong" });
            }
        }
    } catch (error) {
        return response.json(error).end();
    }
}

export default JwtAuthMiddleware;