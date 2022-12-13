import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  DataService
} from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = "";
  acno = "";
  pswd = "";




  constructor(private fb: FormBuilder, private ds: DataService, private route: Router) {}
  //Registration model
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-z A-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9 !@#]*')]]
  })

  //control pass to ts to html file

  ngOnInit(): void {}
  register() {
    console.log(this.registerForm);

    //alert("register clicked")
    console.log(this.registerForm.get('uname')?.errors);


    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    if (this.registerForm.valid) {

      const result = this.ds.register(acno, uname, pswd)
      if (result) {
        alert("Register successfull")
        this.route.navigateByUrl('')
      } else {
        alert('Account already registered')
        this.route.navigateByUrl('register')
      }

    } else {
      alert('invalid form')
    }

  }
}
