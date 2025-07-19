import express from "express"
import DbConnect from "./db/db.js";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express()

DbConnect();
app.listen(port,()=>{
    console.log(`server runiing on port: ${port}`);
    
})