import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import UserRoute from './routes/UserRoute.js';

const app = express();
mongoose.connect('mongodb://localhost:27017/crud_mongoodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database connected!'));

app.use(cors());
app.use(express.json());

app.use(UserRoute);

app.listen(5000, () => console.log('Server running!'));
