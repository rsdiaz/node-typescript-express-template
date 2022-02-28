import 'dotenv/config'
import express from 'express'
// import compression from 'compression'
import lusca from 'lusca'
import morgan from 'morgan'
import routes from './routes'
import { PORT, ENVIRONMENT } from './util/secrets'

const app = express()
const prod = ENVIRONMENT === 'production'

app.set('port', PORT || 3000)
// app.use(compression)
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(prod ? morgan('combined') : morgan('dev'))

app.use(routes)

export default app
