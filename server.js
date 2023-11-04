const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./Config/db");
const Route = require("./Route/employeeRoute");

app.use(express.json());
app.use(cors());
app.use("/api", Route);

app.use("/" , (req,res) => {
    res.send("This Is HOME Page")
})


app.listen(3007, async() => {
    try{
        await connection()
        console.log("Your server is running by PORT - 3007");
    }catch(err){
        console.log("Error in starting server", err);
    }
})