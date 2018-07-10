import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import my task array
import { Task } from '../../app/task'
/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {

  EmpArr =[]
  employeeName:string;
  employeeSurname:string;
  employeeID;
  employeeRole:string;
  proPic: any;
  signUparr2=[];
  signUparr = this.signUparr2;
  url
  constructor(public navCtrl: NavController , public alertCtrl: AlertController) {

  }
  picture(event: any){
    if (event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.results;
      }
    }
    this.proPic = event.target.value;
  }
  // Deleting method
  methodDelete(a:any){
    this.EmpArr.splice(a,1)
  }

  //Adding method
  addEmp(employeeName, employeeSurname, employeeID, employeeRole){
    if(employeeName != "" && employeeSurname != "" && employeeID != "" && employeeRole !=""){}
      let emp = new Task(employeeName,employeeSurname, employeeID,employeeRole)
    this.EmpArr.push(emp);
  
    console.log(this.EmpArr);
  }

  saveData(employeeName,employeeSurname,employeeID,employeeRole){

  }

  //updating button method

update(i,newemployeeName,newemployeeSurname,newemployeeID,newemployeeRole){
  const prompt = this.alertCtrl.create({
    title: 'UPDATE',
    message: "",
    inputs: [
      {
        name: 'Name',
        placeholder: 'Name'
      },

      {
        name: 'Surname',
        placeholder: 'Surname'
      },

      {
        name: 'ID',
        placeholder: 'I.D'
      },

      {
        name: 'Role',
        placeholder: 'Role'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          console.log('Saved clicked');


          let emp = new Task(data.Name, data.Surname ,data.ID , data.Role) ;

          this.EmpArr.push(1,1,emp);
        }
      }
    ]
  });
  prompt.present();


 }
}