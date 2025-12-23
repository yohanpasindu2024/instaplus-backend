import {NextFunction, Response, Request} from "express";

export const asyncHandler = (fn: Function) => (
    request: Request,
    response: Response,
    next: NextFunction
) => Promise.resolve(fn(request, response, next)).catch(next)