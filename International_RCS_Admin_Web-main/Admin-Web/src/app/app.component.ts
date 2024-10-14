import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from './components/Services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'rcs-admin';
  login: any = !!sessionStorage.getItem('login_Status_a');
  error: any;

  constructor(private route: Router, private fb: FormBuilder, private service: ServiceService) { }

  adminLoginFrm = this.fb.group({
    username: [''],
    password: ['']
  })

  ngOnInit(): void {
    const login_Status = sessionStorage.getItem('login_status_a');
    this.login = !(login_Status === 'true');
  }

  onLogin() {

    if (!this.adminLoginFrm.controls['username'].value && !this.adminLoginFrm.controls['password'].value) {
      // console.log("enter username and password.!")
      this.error = "Enter UserName And Password.!"
    }
    else if (this.adminLoginFrm.controls['username'].value && this.adminLoginFrm.controls['password'].value) {
      // console.log(this.adminLoginFrm.value);

      this.service.admin_Login(this.adminLoginFrm.value).subscribe((res: any) => {
        //console.log(res)
        if (res.message.UNAME != "Error: Invalid Username Or Password") {
          this.login = true;
          localStorage.setItem("token_admin", res.jwtToken)
          sessionStorage.setItem('login_status_a', this.login);
          this.login = false;
          this.route.navigate(['/users'])
        }
        else {
          this.error = "Invalid Username Or Password"
        }
      })


    }
  }




}
