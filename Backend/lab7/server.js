import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import student from "./models/student.js";

dotenv.config();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server running successfully!");
});
app.post("/test-db", async (req,res)=>{
    try{
        const std = await student.create({
            name : "Akarsh Bhardwaj",
            email : "akarshb23@gmail.com" ,
            course : "MERN STACK",
        });
        res.status(201).json({
            message : "data inserted successfully",
            data:std ,
        });
    }
    catch(error){
        res.status(500).json({
            message : error.message ,figh
        })
    }
});

app.get("/test-db", async(req,res)=>{
    try{
        const std = await student.find();
        res.status(200).json(std);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

const PORT = process.env.PORT || 3000;
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};
startServer();