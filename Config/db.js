const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017";
const url = "mongodb://127.0.0.1:27017";

const MongoServer = new MongoClient(url);

const connection = async() => {
    try{
        await MongoServer.connect()
        console.log("connection is successfully done");
    }catch(err){
        console.log("Error in connect DataBase", err);
    }
}
connection();

const DataBase = MongoServer.db("MongoDb_Handson2");

module.exports = {connection, DataBase}