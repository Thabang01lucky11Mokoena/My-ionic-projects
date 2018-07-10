import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import signUpArr from '../../app/Array';
import { HomePage } from '../home/home';
import { findLast } from '@angular/compiler/src/directive_resolver';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  Home;
  Away;
  hscore = 0;
  Ascore = 0;

  yes = signUpArr;
  Score=[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');

    console.log(this.yes)
  }
;
  check(b):any{
    this.Home = b
  }

  Try(){
    if (this.Home == "T"){
      this.Ascore += 5;
      
    }
    else {
      this.hscore += 5;
    }
  }

  Penalty(){
    if (this.Home == "T"){
      this.Ascore += 3;
    }
    else {
      this.hscore+=3;
    }
  }

  conversion(){
    if (this.Home == "T"){
      this.Ascore += 2;
    }
    else {
      this.hscore +=2;
    }
   
  }
  Restart(a: any){
    signUpArr.splice(a, 1)
    this.navCtrl.push(HomePage);
  }

  Undo(){
   if (this.Home == "T"){
     this.Ascore -=3;
     
     var len = this.Score.length -1;
     this.Score.splice(1,len)

     if(this.Ascore < 0){
       this.Ascore = 0;
     }
   }
   else {
     this.hscore -=3;

     var len = this.Score.length -1 ;
     this.Score.splice(1, len) ;

     if(this.hscore < 0){
       this.hscore = 0;
     }
   }
  }
}
