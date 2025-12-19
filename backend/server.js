import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from './routes/user.route.js';
import hallroutes from './routes/hall.route.js';
import cors from "cors";
import connectCloudinary from "./config/cloudinary.js";




dotenv.config();
const app=express();
app.use(cors());
connectCloudinary();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users',userRoutes);
app.use('/api/halls/',hallroutes);

app.listen(3000,() => {
    connectDB();
    console.log("server is running on http://localhost:3000");
});


