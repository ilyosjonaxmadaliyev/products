import express from 'express'
import { getProducts, searchProducts } from '../controllers/productsController'

const router = express.Router()

router.get( "/", getProducts );
router.get( "/search", searchProducts );

export default router