import express, {Request, Response, NextFunction} from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({message: 'Hello world'});
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})


