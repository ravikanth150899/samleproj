import pkg from "express";
import bodyparser from "body-parser";
import userRoutes from "./users.js";
const express=pkg;
const app=express();
const port=5000;

app.use(bodyparser.json());
app.use('/users',userRoutes);
app.listen(port,()=> console.log(`hello! welcome to main page with port no: ${port} `));