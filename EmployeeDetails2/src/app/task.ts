export class Task{
    employeeID;
    employeeName:string;
    employeeSurname:string;
    employeeRole:string;
    EmpArr =[]


    constructor(employeeName,employeeSurname,employeeID,employeeRole){
     
       this.employeeName = employeeName;
       this.employeeSurname = employeeSurname;
       this.employeeID = employeeID;
       this.employeeRole =employeeRole;
    }

}  