import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-rcs-templates',
  templateUrl: './rcs-templates.component.html',
  styleUrls: ['./rcs-templates.component.css']
})
export class RcsTemplatesComponent {
  name: any;
  data: any[] = [];
  datashow = false;
  removeid: any;
  options: any[] =[];
  disabled = true;


  constructor(private fb: FormBuilder, private service: ServiceService) { }

  searchFrm = this.fb.group({
    search: ['',[Validators.required]]
  })

  InputField(s:any){
    const search = s;
    this.service.getSerchKey(search).subscribe((res:any) => {
      this.options = res.message;
    })
  }

  templateFrm = this.fb.group({
    pUN: ['' ,[Validators.required]],
    tname: ['' ,[Validators.required,Validators.pattern('[a-zA-Z0-9_\-]+')]],
    pDesc: ['' ,[Validators.required]]
  })

  getTemplate() {
    this.service.getGET_RCS_Template(this.searchFrm.value).subscribe((res: any) => {
      this.datashow = true;
      this.data = res.message;
    })
  }

  saveTemplate() {
    this.service.RCS_Template_Insert(this.templateFrm.value).subscribe((res: any) => {
      this.getTemplate()
    })
  }

  removePermision(i: any) {
    // console.log(this.data[i]);
    
    const id = this.data[i].user_id;
    // const id = this.data[i].tid;
    this.removeid = id;
    this.name = this.data[i].template_name;
  }

  delete() {
    const Pid = this.fb.group({
      pid : this.removeid,
      tname : String(this.name)
    })
    this.service.RCS_Template_delete(Pid.value).subscribe((res: any) => {
      this.getTemplate()
    })
    let req = document.getElementById('cancel')
    req?.click()
  }
}
