import { Router } from 'express';
import {
  loginController,
  RegisterController,
} from '../../controllers/auth.controller';

const router = Router();

router.post('/login', loginController);
router.post('/register', RegisterController);

export default router;
