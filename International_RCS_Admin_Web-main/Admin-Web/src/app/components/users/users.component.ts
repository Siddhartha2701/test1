import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // filename!: string | null;
  datashow = false;
  data: any = [];
  disabled = true;
  options: any[] = [];
  Switch: any;



  constructor(private fb: FormBuilder, private service: ServiceService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

  }

  InputField(s: any) {
    const search = s;
    this.service.getSerchKey(search).subscribe((res: any) => {
      this.options = res.message;
    })
  }

  changeUserPwd = this.fb.group({
    search: [''],
    password: ['']
  })

  regFrm = this.fb.group({
    uname: ['', [Validators.required]],
    pwd: ['p', [Validators.required]],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    mno: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    utype: [1],
    uactiv: [1]
  })

  searchFrm = this.fb.group({
    search: ['', Validators.required]
  })
  onRegister() {
    this.service.getUsers(this.regFrm.value).subscribe((res: any) => {
    })
    this.timer()
    let req = document.getElementById('close')
    req?.click()

  }

  changeVal(e: any) {
    let UpdateMask = {
      search: this.searchFrm.value.search,
      mrval: String(e.target.checked)
    }
    // console.log(UpdateMask);
    this.service.ChangeMaskReportVal(UpdateMask).subscribe((res: any) => {
      // console.log(res);
      this.onSearch();
      // if(res.RETVAL == 0){}
    })
  }

  onSearch() {
    this.service.getUsersbysearch(this.searchFrm.value).subscribe((res: any) => {
      this.datashow = true;
      this.data = res.message[0]
      // console.log(this.data);
      
    })
  }

  timer() {

    setTimeout(() => {
      let req = document.getElementById('cancel')
      req?.click()
    }, 3000);
  }

  clear() {
    this.regFrm.reset()
  }
}
