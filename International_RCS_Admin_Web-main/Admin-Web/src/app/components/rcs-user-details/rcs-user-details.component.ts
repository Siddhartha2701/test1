import { Component } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rcs-user-details',
  templateUrl: './rcs-user-details.component.html',
  styleUrls: ['./rcs-user-details.component.css']
})
export class RcsUserDetailsComponent {

  data: any;
  name1: any;
  dataID: any;
  options: any[] =[];


  constructor(private service: ServiceService, private fb: FormBuilder) { }

  searchFrm = this.fb.group({
    search: ['',[Validators.required]]
  })


  InputField(s:any){
    const search = s;
    this.service.getSerchKey(search).subscribe((res:any) => {
      this.options = res.message;
    })
  }


  frm2 = this.fb.group({
    pUN: ['',[Validators.required]],
    pClientID: ['',[Validators.required]],
    pClientSecret: ['',[Validators.required]],
    pBusinessID : ['',[Validators.required]]
  })

  getDetails() {
    this.service.Rcs_User(this.searchFrm.value).subscribe((res: any) => {
      this.data = res.message;
    })
  }

  save() {
    this.service.Rcs_User_Insert(this.frm2.value).subscribe((res: any) => {
      this.getDetails()
      this.frm2.reset();
    })
  }

  removePermision(i: any) {
    this.dataID = i;
    for (let x = 0; x < this.data.length; x++) {
      if (this.dataID === this.data[x].id) {
        this.name1 = `${this.data[x].uname} with ID ${this.data[x].client_id}`;
      }
    }
  }

  delete() {
    const id = this.fb.group({
      pID: this.dataID
    })
    this.service.Rcs_User_Delete(id.controls['pID'].value).subscribe((res: any) => {
      this.getDetails()
    })
    let req = document.getElementById('cancel')
    req?.click()
  }


}
