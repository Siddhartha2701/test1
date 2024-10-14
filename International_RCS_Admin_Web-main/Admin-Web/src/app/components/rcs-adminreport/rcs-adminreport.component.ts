import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { Data, Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-rcs-adminreport',
  templateUrl: './rcs-adminreport.component.html',
  styleUrls: ['./rcs-adminreport.component.css']
})
export class RcsAdminreportComponent {
  constructor(private dataAdapter: DateAdapter<Date>, private fb: FormBuilder, private datapipe: DatePipe, private route: Router, private server: ServiceService) { }
  datashow = false;
  data: any = [];

  selected = "COMPOSE";
  // search: any;
  frmDate: any;
  lstmDate: any;
  FromDate: any;
  ToDate: any;

  download_Status: any = false;
  pageslice: any;


  options: any[] = [];

  searchFrm = this.fb.group({
    search: ['']
  })

  InputField(s: any) {
    const search = s;
    this.server.getSerchKey(search).subscribe((res: any) => {
      this.options = res.message;
    })
  }


  printDate() {
    // From Date Coversion
    let fdate = this.dataAdapter.format(this.frmDate, 'MM-DD-YYYY');
    let dateobj = new Date(fdate);
    let convertedFromDate = this.datapipe.transform(dateobj, 'yyyy-MM-dd');
    this.FromDate = convertedFromDate + " " + "00:00:00";

    // To Date Coversion
    let tdate = this.dataAdapter.format(this.lstmDate, 'MM-DD-YYYY');
    let dateobj1 = new Date(tdate);
    let convertedToDate = this.datapipe.transform(dateobj1, 'yyyy-MM-dd');
    this.ToDate = convertedToDate + " " + "23:59:59";

    const Data = {
      UserName: this.searchFrm.controls['search'].value,
      selected: this.selected,
      frmDate: this.FromDate,
      toDate: this.ToDate,
      download_Status: this.download_Status
    }

    this.server.getSMSReport(Data).subscribe((res: any) => {
      this.datashow = true;
      this.data = res.message
      this.pageslice = this.data.slice(0, 20)
      const userID = res.UserID
      this.server.UserID.next(userID);
    })
  }
  searchInpField = this.fb.group({
    search1 : ['']
  })
  srch(){
    // console.log(this.searchInpField.value.search);
    const srchNum = parseInt(`${this.searchInpField.value.search1}`)
    const dlength = this.data.length;
    const tempData:any[] = []; 
    for(let i = 0; i<=dlength; i++){
      // console.log(this.data[i].phone_number);
      if(srchNum == this.data[i].phone_number){
        // console.log(this.data[i]);
        tempData.push(this.data[i])
        // console.log(tempData);
      }
      this.pageslice = tempData
    }
  }


  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.data.length) {
      endIndex = this.data.length
    }
    this.pageslice = this.data.slice(startIndex, endIndex)

  }

  downloadBtn() {
    this.download_Status = true;
    this.printDate();
    this.route.navigate(['/downloadCenter']);
  }

}
