import { Router } from "express";
import { createOrder } from "../controllers/orderController.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router() ;

router.post('/',authenticate,createOrder)

export default router ;