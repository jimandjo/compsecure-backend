import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import coffeeRoutes from './routes/coffeeRoutes';
import mongoose from 'mongoose';

const connectionString: string = 'mongodb://localhost:27017/testDB';

mongoose.connect(connectionString).then(
    () => console.log('database connection successful!'), 
    err => console.log('Error connecting to the database', err));

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/coffee', coffeeRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});


app.listen(3000);