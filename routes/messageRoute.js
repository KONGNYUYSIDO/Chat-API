import express from "express";

import { getMessages, createMsg } from "../controllers/messageCon.js";


const router = express.Router();


router.get('/:senderId/:receiverId', getMessages );

router.post('/new/message', createMsg );

export default router;