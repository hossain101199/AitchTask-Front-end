import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { profileRoutes } from '../modules/profile/profile.route';
import { userRoutes } from '../modules/user/user.route';

const routes = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/profile',
    route: profileRoutes,
  },

];

moduleRoutes.forEach(route => routes.use(route.path, route.route));

export default routes;
