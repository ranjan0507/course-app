import { Router } from "express";
import { listPurchases } from "../controllers/purchaseController.js";
import { getPurchase } from "../controllers/purchaseController.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router() ;

router.get('/',authenticate,listPurchases) ;
router.get('/:id',authenticate,getPurchase)

export default router ;