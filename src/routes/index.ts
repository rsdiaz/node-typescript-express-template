import { Router } from 'express'
import homeRoutes from './home.routes'

const routes = Router()

routes.use('/', homeRoutes)

export default routes