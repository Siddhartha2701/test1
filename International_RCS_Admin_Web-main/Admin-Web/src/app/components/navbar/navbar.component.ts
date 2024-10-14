import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './components/Services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  sizeWidth : any;
  
  constructor(private route : Router,private service : ServiceService){
    this.sizeWidth = window.innerWidth;
  }
  log_out() {
    this.service.logOut().subscribe(()=>{  
      sessionStorage.removeItem('login_status_a');
      localStorage.removeItem('token_admin');
      window.location.reload();
    })
  }

  

  menuNav(){
    if(this.sizeWidth <= 767){
      let a = document.getElementById('menu_bar');
      a?.click();
    }
  }
}
