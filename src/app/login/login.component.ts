import {
  assertPlatform,
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //3rd execute
  //class- collection of properties and functions 
  //properties/variable
  aim = "Your perfect bannking partner"

  account = "Enter you account here"
  acno=""
  pswd=""

  //login model
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9 !@#]*')]]
  })
  

  

  //function/methods - user defined functions  //4th execute
// //dependancy injection

  constructor( private ds:DataService , private router:Router, private fb:FormBuilder) { // 1st execute
    //it automatically invokes when the object is created
    //object initialization
  }

  ngOnInit(): void { //2rd execute
    //its a life cycle hooks of angular
    //when the component is created at same time it will initialize or authorize
  }
  acnoChange(event: any) {
    console.log(event);
    this.acno=event.target.value;
    console.log(this.acno);

  }
  pswdChange(event:any){
    console.log(event);
    this.pswd=event.target.value;  
    console.log(this.pswd)
  }
  login(){
    var acno=this.loginForm.value.acno;
    var pswd=this.loginForm.value.pswd;

    if(this.loginForm.valid){
      this.ds.login(acno,pswd)
      .subscribe((result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno));
        localStorage.setItem('token',JSON.stringify(result.token));
        alert(result.message);
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
      })
    }
  }
}
  // ---------- b)Event Binding using $ event - (event_name)="event_name($event)"-----------

  // login() {
  //   // alert('login clicked');
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert("login successfull")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("invalid account number")
  //   }
  // }

          // --------event variable using template referencing variable-------

  // login(a:any,p:any) {
  //   // alert('login clicked');
  //   var acno=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert("login successfull")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("invalid account number")
  //   }
  // }

  //   login() {
  //   // alert('login clicked');
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.ds.userDetails
  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert("login successfull");
  //       this.router.navigateByUrl('dashboard')
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("invalid account number")
  //   }
  // }


