import { Router } from 'express';
import {
  createProductController,
  getProducts,
  getProviders,
} from '../../controllers/product.controller';
import { validationAuth } from '../../middlewares/product.middleware';

const router = Router();

router.get('/', validationAuth, getProducts);
router.get('/providers', getProviders);
router.post('/', createProductController);

export default router;
