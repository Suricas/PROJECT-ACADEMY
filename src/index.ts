import express from 'express'
import { excEnv } from './config/environment/exec'

excEnv();

let app = express();

app.listen(process.env.PORT, () => {
    console.log(`Running server. PORT: ${process.env.PORT}`)
})