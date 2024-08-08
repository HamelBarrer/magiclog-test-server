import { Request, Response } from 'express';
import { safeParse } from 'valibot';
import { creationHash, validationHash } from '../../../utils/hash.util';
import { creationToken } from '../../../utils/token.util';
import { findByUserEmail, insertUser } from '../repositories/auth.repository';
import { LoginSchema, RegisterSchema } from '../schemas/auth.schema';

export const loginController = async (req: Request, res: Response) => {
  const result = safeParse(LoginSchema, req.body);
  if (!result.success) {
    const [error] = result.issues;
    res.status(400).json({ error: error.message });
    return;
  }
  const { email, password } = result.output;
  const foundUser = await findByUserEmail(email);
  if (!foundUser) {
    res.status(400).json({ error: 'El usuario o la contraseña no coinciden' });
    return;
  }

  if (!(await validationHash(password, foundUser.password))) {
    res.status(400).json({ error: 'El usuario o la contraseña no coinciden' });
    return;
  }

  const token = await creationToken(foundUser.userId);

  res.status(200).json({
    userId: foundUser.userId,
    email: foundUser.email,
    name: foundUser.name,
    token,
  });
};

export const RegisterController = async (req: Request, res: Response) => {
  const result = safeParse(RegisterSchema, req.body);
  if (!result.success) {
    const [error] = result.issues;
    res.status(400).json({ error: error.message });
    return;
  }
  const { name, email, password, confirmPassword } = result.output;
  if (password !== confirmPassword) {
    res.status(400).json({ error: 'Las contraseñas no coinciden' });
    return;
  }
  const newPassword = await creationHash(password);

  const createdUser = await insertUser({ email, name, password: newPassword });
  const token = await creationToken(createdUser.userId);

  res.status(200).json({
    userId: createdUser.userId,
    email: createdUser.email,
    name: createdUser.name,
    token,
  });
};
