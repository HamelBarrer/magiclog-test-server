import { prisma } from '../../../storage';
import { ICreateProduct } from '../models/product.model';

export const findAllProduct = async (userId: number) => {
  return await prisma.products.findMany({
    select: {
      productId: true,
      name: true,
      sku: true,
      price: true,
    },
    where: {
      userId,
    },
  });
};

export const insertProduct = async (data: ICreateProduct) => {
  return await prisma.products.create({ data });
};
