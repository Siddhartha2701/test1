import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { ActivatedRoute } from '@angular/router';
import { getAllResellerInter } from '../Services/IResellerList'

@Component({
  selector: 'app-reseller-user',
  templateUrl: './reseller-user.component.html',
  styleUrls: ['./reseller-user.component.css']
})
export class ResellerUserComponent implements OnInit {
  // filename!: string | null;
  datashow = false;
  data: any[] = [];
  disabled = true;
  options: any[] = [];
  orgData: any[] = [];


  regErrMessage = '';


  constructor(private fb: FormBuilder, private service: ServiceService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getAllResellersUser()

  }


  getAllResellersUser(){
    this.service.getAllResellerData().subscribe(res => {
      // console.log(res, "getAllReseller");
      this.datashow = true;
      this.data = res;
      this.orgData = res;
    })
  }
  InputField(s: any) {
    const search = s;
    this.service.getSerchKey(search).subscribe((res: any) => {
      this.options = res.message;
    })
    if (this.searchFrm.value.search == '') {
      this.data = this.orgData
      // console.log(this.data,"lll");

    }
  }

  changeUserPwd = this.fb.group({
    search: [''],
    password: ['']
  })

  ressregFrm = this.fb.group({
    uname: ['', [Validators.required]],
    pwd: ['p', [Validators.required]],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    mno: [, [Validators.required]],
    dom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  })

  searchFrm = this.fb.group({
    search: ['', Validators.required]
  })
  onRegister() {

    if (this.ressregFrm.valid) {

      this.service.addReseller(this.ressregFrm.value).subscribe((res: any) => {
        // console.log(res);
        // this.ressregFrm.reset();
      })
      // console.log(this.ressregFrm.value);
      this.ressregFrm.reset();
      this.timer()
      let req = document.getElementById('close')
      req?.click()
      this.ressregFrm.reset()
    }
    else{
      this.regErrMessage = 'Please Fill All The Fields.'
    }

  }

  onSearch() {
    // console.log(this.data);

    const arr: any[] = this.data
    let datalength: number = this.data.length;
    for (let i = 0; i <= datalength; i++) {
      // console.log(this.searchFrm.value.search == this.data[i].Uname);
      if (this.searchFrm.value.search == arr[i].user_name) {
        this.datashow = true;
        // console.log(this.data[i],"ll");
        const obj = arr[i];
        this.data = [obj];
        console.log(this.data);
        return
      }
    }

  }


  Checked(e:any,event:any){
    // console.log(e,event.target.checked);
    const data = {
      uname : e,
      value : event.target.checked
    }
    this.service.resellerUserBlock(data).subscribe(res => {
      this.getAllResellersUser()

    })
  }
  timer() {

    setTimeout(() => {
      let req = document.getElementById('cancel')
      req?.click()
    }, 3000);
  }

  clear() {
    this.ressregFrm.reset()
  }
}
