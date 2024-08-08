import { Router } from 'express';
import {
  createProductController,
  getProducts,
} from '../../controllers/product.controller';
import { validationAuth } from '../../middlewares/product.middleware';

const router = Router();

router.get('/', validationAuth, getProducts);
router.post('/', validationAuth, createProductController);

export default router;
