const { DataBase } = require("../Config/db")
const collection = DataBase.collection("Employee");

const addemployee = async(req,res) => {
    const details = req.body;
    const adddata = await collection.insertMany(details);
    console.log(adddata);
    res.send("added Successfully");
}

const employeelist = async(req,res) => {
    const details = req.body;
    const listdata = await collection.find(details).toArray();
    console.log(listdata);
    // res.send("This is the total employee list");
    res.json(listdata);
}

const employeemoresalary = async(req, res) => {
    const details = req.body;
    const moresalary = await collection.find({salary: {$gt : "30000"}}).toArray();
    console.log(moresalary);
    // res.send("This is the total employee list who having more then 30000+ salary");
    res.json(moresalary);
}

const employeeMoreExpr = async(req, res) => {
    const details = req.body;
    const moreExpr = await collection.find({overallExp: {$gt : "2"}}).toArray();
    console.log(moreExpr);
    // res.send("This is the total employee list who having more then 2+ year Expreance");
    res.json(moreExpr);
}

const graduateEmployee = async(req, res) => {
    const details = req.body;
    const graduate = await collection.find({yearGrad: {$gt : "2015"}, overallExp : {$gt : "1"}}).toArray();
    console.log(graduate);
    // res.send("This is the total employee list who having more then 1+ year Expreance and graduate after 2015");
    res.json(graduate);
}

const updateEmployeeSalary = async(req, res) => {
    const details = req.body;
    const updatedSalary = await collection.updateMany({salary : {$gt : "70000"}}, {$set : {salary : "65000"}});
    console.log(updatedSalary);
    // res.send("This is the updated salary list");
    res.json(updatedSalary); 
}

const deleteemployee = async(req,res) => {
    const details = req.body;
    const deldata = await collection.deleteMany({lastCompany: "Y"});
    console.log(deldata);
    res.send("Delete Successfully");
}


module.exports = {addemployee, deleteemployee, employeelist, employeemoresalary, employeeMoreExpr, graduateEmployee, updateEmployeeSalary}