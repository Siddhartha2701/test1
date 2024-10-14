import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  receivedDataType = false;
  receivedData: any = [];
  receivedDataLength: any;
  totalCredits: any = 0;
  totalAmount: number = 0;
  options: any[] = [];
  avalaibleCredits: any;
  disabled = true;



  constructor(private fb: FormBuilder, private service: ServiceService,private _snackBar: MatSnackBar) { }
  searchFrm = this.fb.group({
    search: ['']
  })

  add_BalFrm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_\-]+')]],
    credits: ['', [Validators.required]],
    amt: ['', [Validators.required]],
    pdesc: ['', [Validators.required]],
    sname: ['raju']
  })


  addBalance() {
    // this.add_BalFrm.patchValue({
    //   uname: this.add_BalFrm.controls['uname'].value,
    //   credits: this.add_BalFrm.controls['credits'].value,
    //   amt: this.add_BalFrm.controls['amt'].value,
    //   pdesc: this.add_BalFrm.controls['pdesc'].value,
    //   sname: this.add_BalFrm.controls['sname'].value
    // })
    if (this.add_BalFrm.valid) {
      this.service.RCS_User_Balance_Insert(this.add_BalFrm.value).subscribe((res: any) => {
        // console.log(res);
        if(res.message == "Added Credits To User Successfull.!"){
          this._snackBar.open(res.message,'',{
            duration:5000
          })
          this.getPayments();
        }
      })
      // console.log(this.add_BalFrm.value);
      let req = document.getElementById('cancel')
      req?.click()

    }

  }


  InputField(s: any) {
    const search = s;
    this.service.getSerchKey(search).subscribe((res: any) => {
      this.options = res.message;
    })
  }



  getPayments() {
    this.service.getRCS_User_Balance_Insert_byName(this.searchFrm.value).subscribe((res: any) => {
      // console.log(res);
      this.receivedDataType = true;
      this.receivedData = res.message[0];
      this.receivedDataLength = this.receivedData.length;
      if (res.message[0][0].no_of_rcs_wallet) {
        this.avalaibleCredits = Number(res.message[0][0].no_of_rcs_wallet).toLocaleString('en');
      }
      if (this.receivedData) {
        this.totalAmount = 0;
        // this.totalCredits = 0;
        for (let i = 0; i < this.receivedDataLength; i++) {
          // this.totalCredits += parseInt(this.receivedData[i].no_of_credits)
          this.totalAmount += parseFloat(this.receivedData[i].no_of_rcs_wallet)
          this.totalAmount = parseFloat(this.totalAmount.toFixed(5));
        }
      }
    })
  }


  close() {
    this.add_BalFrm.reset();
  }

}
