const { addemployee, deleteemployee, employeelist, employeemoresalary, employeeMoreExpr, graduateEmployee, updateEmployeeSalary } = require("../Controller/employeeContr");

const Route = require("express").Router();

Route.post("/addemployee", addemployee);

Route.get("/findemployee", employeelist);

Route.get("/moresalary", employeemoresalary);

Route.get("/moreExp", employeeMoreExpr);

Route.get("/graduate", graduateEmployee);

Route.put("/update", updateEmployeeSalary);

Route.delete("/delemployee", deleteemployee);

module.exports = Route;