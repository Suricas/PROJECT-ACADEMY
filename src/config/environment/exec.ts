import dotenv from 'dotenv'

export const excEnv = () => {
    dotenv.config({ path: process.env.NODE_ENV === "production" ? ".env.production" : '.env.development' })
}