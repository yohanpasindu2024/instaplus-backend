import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from "../config/env.config";

export const authMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction,
)=> {
    const authHeader = request.headers.authorization;

    if(!authHeader?.startsWith('Bearer ')){
        return response.status(401).json({message: 'Unauthorized'})
    }

    const token: string = authHeader?.split(' ')[1]

    try {
        const decoded = jwt.verify(
            token,
            JWT_SECRET as string
        ) as any

        (request as any).user = decoded.userId
    } catch (error) {
        return response.status(401).json({message: 'Token expired or invalid'})
    }
}