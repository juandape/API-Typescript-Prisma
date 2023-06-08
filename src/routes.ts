import { Application } from 'express';

import userRoutes from './api/user';
import reviewRoutes from './api/review';
import postRoutes from './api/post';

function routes(app: Application) {
  app.use('/api/users', userRoutes);
  app.use('/api/reviews', reviewRoutes);
  app.use('/api/posts', postRoutes);
}

export default routes;
