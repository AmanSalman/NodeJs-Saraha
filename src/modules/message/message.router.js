import { Router } from 'express';
import * as MessageController from './message.controller.js';
import { auth } from './../../middleware/authentication.js';
import { asyncHandler } from './../../services/errorHandling.js';
const router = Router();


router.get('/',auth, asyncHandler(MessageController.getMessages ) );
router.post('/:receiverId', asyncHandler(MessageController.sendMessage) );

export default router;