import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { RcsAdminreportComponent } from './components/rcs-adminreport/rcs-adminreport.component';
import { RcsTemplatesComponent } from './components/rcs-templates/rcs-templates.component';
import { RcsUserDetailsComponent } from './components/rcs-user-details/rcs-user-details.component';
import { ChgpwdComponent } from './components/chgpwd/chgpwd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';


import { LucideAngularModule, File, Home, Menu, UserCheck,User,Download ,FileText ,FileSpreadsheet,ArrowBigDownDash,Lock,Search ,IndianRupee , Power,X,Trash2, FileDown } from 'lucide-angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';





import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SmartQueueComponent } from './components/smart-queue/smart-queue.component';
import { ChangeUserPwdComponent } from './components/change-user-pwd/change-user-pwd.component';
import { DownloadCenterComponent } from './components/download-center/download-center.component';
import { ServiceService } from './components/Services/service.service';
import { ResellerUserComponent } from './components/reseller-user/reseller-user.component';
import { ChatBotReplyComponent } from './components/chat-bot-reply/chat-bot-reply.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    PaymentsComponent,
    RcsAdminreportComponent,
    RcsTemplatesComponent,
    RcsUserDetailsComponent,
    ChgpwdComponent,
    SmartQueueComponent,
    ChangeUserPwdComponent,
    DownloadCenterComponent,
    ResellerUserComponent,
    ChatBotReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, DatePipe,HttpClientModule,

    LucideAngularModule.pick({File, Home, Menu, UserCheck,User,Download ,FileText ,FileSpreadsheet,ArrowBigDownDash,Lock,Search ,IndianRupee , Power,X,Trash2, FileDown}),

    MatDatepickerModule,
    MatInputModule, MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule, MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    MatRippleModule,
    MatIconModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceService,
      multi: true
    },  // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
