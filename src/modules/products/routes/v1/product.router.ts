import { Router } from 'express';
import {
  createProductController,
  getProducts,
  getProviders,
} from '../../controllers/product.controller';

const router = Router();

router.get('/', getProducts);
router.get('/providers', getProviders);
router.post('/', createProductController);

export default router;
