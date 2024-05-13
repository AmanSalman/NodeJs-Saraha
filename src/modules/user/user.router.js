import { Router } from "express";
import * as UserConrtoller from './user.controller.js';
import { auth } from "../../middleware/authentication.js";
import { asyncHandler } from './../../services/errorHandling.js';

const router = Router();
router.get('/profile', auth , asyncHandler(UserConrtoller.Profile));


export default router;
