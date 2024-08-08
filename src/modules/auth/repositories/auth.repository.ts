import { prisma } from '../../../storage';
import { IUser } from '../models/auth.model';

export const findByUserEmail = async (email: string) => {
  return await prisma.users.findFirst({
    where: {
      email,
    },
  });
};

export const insertUser = async ({ email, name, password }: IUser) => {
  return await prisma.users.create({
    data: {
      email,
      name,
      password,
      roleId: 1,
    },
  });
};
