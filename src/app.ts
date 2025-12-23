import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import authRouter from "./modules/auth/auth.routes";
import {errorMiddleware} from "./middleware/error.middleware";

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(errorMiddleware)

app.use('/api/v1/auth', authRouter)

app.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'API is running' })
})

export default app