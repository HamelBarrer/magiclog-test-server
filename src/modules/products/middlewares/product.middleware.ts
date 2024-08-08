import { NextFunction, Request, Response } from 'express';
import { validationToken } from '../../../utils/token.util';

export const validationAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ data: 'Information not found' });

  if (!token.toLocaleLowerCase().startsWith('bearer'))
    return res.status(403).json({ data: 'Information not found' });

  const jwt = token.substring(7);

  const userId = await validationToken(jwt);
  if (userId === 0)
    return res.status(404).json({ data: 'Information not found' });

  req.userId = userId;

  return next();
};
