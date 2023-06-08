import express from 'express';
import confExpress from './config/express';
import routes from './routes';

const app = express();

const PORT = process.env.PORT ?? 3000;

confExpress(app);

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
