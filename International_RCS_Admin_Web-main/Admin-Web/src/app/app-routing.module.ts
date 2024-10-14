import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChgpwdComponent } from './components/chgpwd/chgpwd.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { RcsAdminreportComponent } from './components/rcs-adminreport/rcs-adminreport.component';
import { RcsTemplatesComponent } from './components/rcs-templates/rcs-templates.component';
import { RcsUserDetailsComponent } from './components/rcs-user-details/rcs-user-details.component';
import { UsersComponent } from './components/users/users.component';
import { SmartQueueComponent } from './components/smart-queue/smart-queue.component';
import { ChangeUserPwdComponent } from './components/change-user-pwd/change-user-pwd.component';
import { DownloadCenterComponent } from './components/download-center/download-center.component';
import { AppComponent } from './app.component';
import { ResellerUserComponent } from './components/reseller-user/reseller-user.component';
import { ChatBotReplyComponent } from './components/chat-bot-reply/chat-bot-reply.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'chgpwd',component:ChgpwdComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'rcs_adminreports',component:RcsAdminreportComponent},
  {path:'templates',component:RcsTemplatesComponent},
  {path:'userdetails',component:RcsUserDetailsComponent},
  {path:'users',component:UsersComponent},
  {path:'smart-queue',component:SmartQueueComponent},
  {path:'change-user-pwd',component:ChangeUserPwdComponent},
  {path:'downloadCenter',component:DownloadCenterComponent},
  {path:'resellerUser',component:ResellerUserComponent},
  {path:'chatBot_Reply',component:ChatBotReplyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
