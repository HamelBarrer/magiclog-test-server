import { prisma } from '../../../storage';
import { ICreateProduct } from '../models/product.model';

export const findAllProduct = async (userId: number[]) => {
  const where: any = {};

  if (userId) {
    where.userId = {
      in: userId,
    };
  }

  return await prisma.products.findMany({
    select: {
      productId: true,
      name: true,
      sku: true,
      price: true,
      quantity: true,
    },
    where,
    orderBy: {
      productId: 'desc',
    },
  });
};

export const findAllProviders = async () => {
  return await prisma.users.findMany({
    select: {
      userId: true,
      name: true,
    },
    where: {
      roleId: 1,
    },
  });
};

export const insertProduct = async (data: ICreateProduct) => {
  return await prisma.products.create({ data });
};
