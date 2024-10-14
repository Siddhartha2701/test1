import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-center',
  templateUrl: './download-center.component.html',
  styleUrls: ['./download-center.component.css']
})
export class DownloadCenterComponent {
  fileName: any
  UserData: any;
  access = false;

  constructor(private fb: FormBuilder, private service: ServiceService) { }
  ID = this.fb.group({
    userID: 0
  });



  ngOnInit(): void {
    this.service.UserID.subscribe(res => {
      setTimeout(()=>{
        this.details()
      },1000)
    });

  }

  details(){
    this.service.getDownloadCenterDetails(this.ID.value).subscribe((res: any) => {
      this.UserData = res.message
    })
  }

  download(i: any) {
    const reportID = {
      id : this.UserData[i].file_path
    } 
    this.service.download_Report(reportID).subscribe((res:any) => {
      saveAs(res, `${this.UserData[i].file_path}`)
    })
  }
}


