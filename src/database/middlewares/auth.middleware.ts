import { NextFunction, Request, Response } from 'express';
import createProductSchema from '../../services/validations/schemas';

async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { error } = createProductSchema.validate(req.body);
  
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  }
  next();
}

export default {
  authMiddleware,
};