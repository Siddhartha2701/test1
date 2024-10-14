import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-smart-queue',
  templateUrl: './smart-queue.component.html',
  styleUrls: ['./smart-queue.component.css']
})
export class SmartQueueComponent implements OnInit{
  dataShow:boolean = false;
  data:any = [];
  
  constructor(private service : ServiceService){}
  
  ngOnInit(): void {
    this.service.get_InQueue_Smart_Cnt().subscribe((res:any) =>{
      this.dataShow = true;
      // console.log(res);
      this.data = res.message;
    })
    
  }

  reload(){
    window.location.reload();
  }

}
