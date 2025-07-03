import { Router } from "express";
import { listPurchases } from "../controllers/PurchaseController";
import { getPurchase } from "../controllers/PurchaseController";
import { authenticate } from "../middlewares/auth";

const router = Router() ;

router.get('/',authenticate,listPurchases) ;
router.get('/:id',authenticate,getPurchase)

export default router ;