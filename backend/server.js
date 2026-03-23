import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();


import studentRouter from "./routes/student.js";

const app = express();
app.use(cors());  
app.use(express.json());    


app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use("/student", studentRouter);


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

