import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../product/product.controller';

const router = Router();

router.post('/create', createProduct);

router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

router.get('/', getAllProducts);

export const ProductRoutes = router;
