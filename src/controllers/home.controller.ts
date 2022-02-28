import { Request, Response } from 'express'

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  res.status(200).send('Express TypeScript Template')
}
