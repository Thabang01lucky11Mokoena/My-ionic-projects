import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EmployeesPage } from '../employees/employees';
import { Task } from "../../app/task";


import signUpArr from '../../app/arraySign' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  
  userName: string;
  password: string;

 
  constructor(public navCtrl: NavController) {

  }
  

  Login(username, password){

    let g = new register(this.userName, this.password);

   
   
    signUpArr.push(g) ;
   
    this.navCtrl.push(EmployeesPage)
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }



 

  }

  export class register{

    usernamee;
    passwordee ;

    constructor(username , password) {

      this.usernamee=username ;
      this.passwordee=this.passwordee;

    }

  }

