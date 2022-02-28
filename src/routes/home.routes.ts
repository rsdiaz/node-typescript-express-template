import { Router } from 'express'
import * as homeController from '../controllers/home.controller'
const homeRouter = Router()

homeRouter.get('/', homeController.index)

export default homeRouter
