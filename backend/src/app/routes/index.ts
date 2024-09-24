import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { ProductRoutes } from '../modules/product/product.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/user',
    routes: UserRoutes,
  },
  {
    path: '/product',
    routes: ProductRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
