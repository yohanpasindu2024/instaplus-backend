import { Request, Response } from "express";
import {asyncHandler} from "../../utils/async.handler";
import {loginService} from "./auth.service";

// Login
export const login = asyncHandler(async (request: Request, response: Response) => {
    const { email, password } = request.body;

    if (!email || !password) {
        response.status(400).json({message: 'Email and password are required'})
    }

    const result = await loginService(email, password)
    response.status(200).json({result, message: 'Login successful'})
})