import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());


app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});


const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

