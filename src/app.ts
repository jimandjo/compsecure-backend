import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import postRoutes from './routes/postRoutes';
import userRoutes from './routes/userRoutes';
import mongoose from 'mongoose';

const connectionString: string = 'mongodb://localhost:27017/postsDB';

mongoose.connect(connectionString).then(
    () => console.log('database connection successful!'), 
    err => console.log('Error connecting to the database', err));

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//cors
const cors = require('cors');
// const corsOptions = {
//     origin: [ 'http://localhost:3000', 'http://localhost:3004' ]
// };
app.use(cors());

// routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});


app.listen(3000);