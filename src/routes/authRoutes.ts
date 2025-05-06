import express from 'express'
import { generateNewToken, login, register } from '~/controllers/authController';
import authMiddleware from '~/middlewares/authMiddlewares';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/refreshToken", authMiddleware, generateNewToken);

export default router;