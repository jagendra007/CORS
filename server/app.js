import express from "express";
import cors from "cors";
const app = express();


app.use(
    cors({
        origin: "http://127.0.0.1:5500"
    })
)

const port = 3000;


app.get("/data", (req,res)=>{
    res.json({name: "Jagendra", favoriteBike: "Kawasaki 900"})
})

app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
})