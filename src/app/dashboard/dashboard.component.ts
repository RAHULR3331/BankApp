import {
  assertPlatform,
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = '';
  //deposite model
  depositeForm = this.fb.group({
    pswd: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  //withdraw model
  withdrawForm = this.fb.group({
    pswd1: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9]*')]],
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    // this.user = this.ds.currentUser
    this.user=JSON.parse(localStorage.getItem('currentUser')||'')
    this.sdate = new Date;
  }

  ngOnInit(): void {
    // if(!localStorage.getItem('currentAcno')){
    //   alert("please login First")
    //   this.router.navigateByUrl('');
    // }
    this.user = JSON.parse(localStorage.getItem('currentUser') || '');
    console.log(this.user)
  }

  //DEPOSITE
  acno = '';
  pswd = '';
  amount = '';

  deposite() {

    var acno = this.depositeForm.value.acno;
    var pswd = this.depositeForm.value.pswd;
    var amount = this.depositeForm.value.amount;
    if (this.depositeForm.valid) {

    
    this.ds.deposite(acno, pswd, amount)
      .subscribe((result: any) => {
          alert(result.message)
        },
        result => {
          alert(result.error.message)
        })
      }
  }

  //WITHDRAW
  acno1 = '';
  pswd1 = '';
  amount1 = "";

  withdraw() {
    var acno = this.withdrawForm.value.acno1;
    var pswd = this.withdrawForm.value.pswd1;
    var amount = this.withdrawForm.value.amount1;
    const result = this.ds.withdraw(acno, pswd, amount)
    if (this.withdrawForm.valid) {

    
      this.ds.withdraw(acno, pswd, amount)
        .subscribe((result: any) => {
            alert(result.message)
          },
          result => {
            alert(result.error.message)
          })
        }
    }
  // alert('withdaw clicked')

  logout() {
    // alert('clicked')
    //remove currentacno and currentuser from localstorage
    localStorage.removeItem('currentAcno');
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('');
  }
  delete() {
    // alert('delete')
    this.acno = JSON.parse(localStorage.getItem('currentAcno') || '')
  }
  onCancel() {
    this.acno = "";
  }
  //current date and time
  sdate: any;
}
