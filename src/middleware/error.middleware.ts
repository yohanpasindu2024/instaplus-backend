import {NextFunction, Request, Response} from "express";
import {AppError} from "../utils/app.error";
import logger from "../utils/logger";

export const errorMiddleware = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
)=> {

    logger.error(error)

    if (error instanceof  AppError) {
        return response.status(error.statusCode).json({message: error.message})
    }

    return response.status(500).json({message: 'Internal server error'})
}

