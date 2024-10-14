import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-change-user-pwd',
  templateUrl: './change-user-pwd.component.html',
  styleUrls: ['./change-user-pwd.component.css']
})
export class ChangeUserPwdComponent {

  // pwd:string = '';
  options: any[] = [];
  dataStatus: any;
  disabled = true;


  constructor(private fb: FormBuilder, private service: ServiceService, private route: ActivatedRoute) { }


  changeUserPwd = this.fb.group({
    search: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })
  InputField(s: any) {
    const search = s;
    this.service.getSerchKey(search).subscribe((res: any) => {
      this.options = res.message;
    })
  }

  submit() {
    this.service.ChangeUserPassword(this.changeUserPwd.value).subscribe((res: any) => {
      this.dataStatus = res.message
      setTimeout(() => {
        this.changeUserPwd.reset();
        this.dataStatus="";
      }, 7000)
    })
  }

}
