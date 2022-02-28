import 'dotenv/config'

export const PORT = process.env.PORT
export const ENVIRONMENT = process.env.NODE_ENV
const prod = ENVIRONMENT === 'production'