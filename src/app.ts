import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import userRoutes from './routes/userRoutes'

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})