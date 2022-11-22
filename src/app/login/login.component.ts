import {
  Component,
  OnInit
} from '@angular/core';

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

  //database
  userDetails:any={
    1000:{acno:1000,username:"rahul",password:1000,balance:1000},
    1001:{acno:1001,username:"rahul",password:1001,balance:10001},
    1002:{acno:1002,username:"rahul",password:1002,balance:100002},
    1003:{acno:1003,username:"rahul",password:1003,balance:1000003}
  }

  //function/methods - user defined functions  //4th execute

  constructor() { // 1st execute
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

    login() {
    // alert('login clicked');
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert("login successfull")
      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert("invalid account number")
    }
  }

}
