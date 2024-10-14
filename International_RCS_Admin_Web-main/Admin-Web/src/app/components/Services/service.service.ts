import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { getAllResellerInter } from './IResellerList';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // downloadCenterReport="http://103.73.191.131:7070"
  // downloadCenterReport="http://192.168.29.93:8080"

  // apiurl = "http://192.168.29.93:8000"
  // apiurl = "http://158.69.0.245:8000"
  apiurl = "https://adminrcshub.telinfy.com/ircswebapi/"
  // apiurl = "http://localhost:8000"


  UserID = new BehaviorSubject<any>("");

  constructor(private http: HttpClient) { }


  // get_Userbyname Service Starts here.
  getRCS_UserDetails(username: any) {
    const url = `${this.apiurl}get_Userbyuname`;
    return this.http.post(url, username);
  }
  // get_Userbyname Service Ends here.


  // checkAdmin Service Starts here.
  admin_Login(credentials: any) {
    const url = `${this.apiurl}checkAdmin`;
    return this.http.post(url, credentials);
  }
  // checkAdmin Service Ends here.


  // RCS_User_Balance Service Starts here.
  RCS_User_Balance_Insert(data: any) {
    const url = `${this.apiurl}RCS_User_Balance_Insert`;
    return this.http.post(url, data);
  }

  getRCS_User_Balance_Insert_byName(name: any) {
    const url = `${this.apiurl}RCS_User_Balance_Insert/name`;
    return this.http.post(url, name);
  }
  // RCS_User_Balance Service Ends here.

  // Users Service Starts Here. 
  getUsers(Registration: any) {
    const url = `${this.apiurl}Users`;
    return this.http.post(url, Registration);
  }

  addReseller(resellerData:any){
    const url = `${this.apiurl}Users/addReseller`;
    return this.http.post(url, resellerData);
  }
  
  getAllResellerData(){
    const url = `${this.apiurl}Users/getAllReseller`;
    return this.http.get<getAllResellerInter[]>(url);
  }

  getUsersbysearch(search: any) {
    const url = `${this.apiurl}Users/search`;
    return this.http.post(url, search);
  }
  ChangeMaskReportVal(MVal: any) {
    const url = `${this.apiurl}Users/updateMaskReport`;
    return this.http.post(url, MVal);
  }
  // Users Service Ends Here. 

  // SMS-Report Service Starts here.
  getSMSReport(data: any) {
    const url = `${this.apiurl}smsReport`;
    return this.http.post(url, data);
  }
  // SMS-Report Service Ends here.

  // Get_RCS_Template Service Starts here
  getGET_RCS_Template(name: any) {
    const url = `${this.apiurl}Get_RCS_Templates`;
    return this.http.post(url, name);
  }

  RCS_Template_Insert(details: any) {
    const url = `${this.apiurl}Get_RCS_Templates/insert`;
    return this.http.post(url, details);
  }

  RCS_Template_delete(indexx: any) {
    const url = `${this.apiurl}Get_RCS_Templates/delete/`;
    return this.http.delete<any>(url + indexx);
  }
  // Get_RCS_Template Service Ends here,

  // RCS_User Service Starts here.
  Rcs_User(name: any) {
    const url = `${this.apiurl}RCS_User`;
    return this.http.post(url, name);
  }

  Rcs_User_Insert(insertData: any) {
    const url = `${this.apiurl}RCS_User/insert`;
    return this.http.post(url, insertData);
  }

  Rcs_User_Delete(id: any) {
    const url = `${this.apiurl}RCS_User/delete/`;
    return this.http.delete(url + id);
  }
  // RCS_User Service Ends here.


  //get_InQueue_Smart_Cnt Service Starts here.
  get_InQueue_Smart_Cnt() {
    const url = `${this.apiurl}get_InQueue_Smart_Cnt`;
    return this.http.get(url);
  }
  //get_InQueue_Smart_Cnt Service Ends here.


  getSerchKey(val: string) {
    const url = `${this.apiurl}searchUser`;
    return this.http.post(url, val);
  }

  ChangeUserPassword(credentials: any) {
    const url = `${this.apiurl}ChangeUserPwd`;
    return this.http.post(url, credentials);
  }


  download_Report(filename: any) {
    const url = `${this.apiurl}reportDownload`;
    return this.http.post(url, filename, { responseType: 'blob' })
  }

  getDownloadCenterDetails(id: any) {
    const url = `${this.apiurl}download_Center`;
    return this.http.post(url, id);
  }
  
  
  addChatKeyValue(Data: any) {
    const url = `${this.apiurl}rcs_add_chatkeyvalue`;
    return this.http.post(url, Data);
  }


  resellerUserBlock(data:any){
    const URL = `${this.apiurl}Users/updateBlockUserforReseller`;
    return this.http.post(URL,data)
  }
 
  logOut(){
    const URL = `${this.apiurl}/logout`;
    return this.http.get(URL)
  }












  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const tokenadmin = localStorage.getItem('token_admin');
    const modifiedRequest = request.clone({
      headers: request.headers.set('token_admin', `${tokenadmin}`)
    });

    // return next.handle(modifiedRequest).do((event: any) => { }, (err: { status: any; }) => {
    //   if (err instanceof HttpErrorResponse && err.status === 401) {
    //     // this.authService.handleAuthentication();
    //   }
    // });
    return next.handle(modifiedRequest)
      .pipe(
        tap({
          next: (event) => {
            if (event instanceof HttpResponse) {
              if (event.status == 401) {
                localStorage.removeItem('token_admin');
                sessionStorage.removeItem('login_status_a');
                alert('Token Expired Please Re-Login.!');
                window.location.reload();
                return;
              }
            }
            return event;
          },
          error: (error) => {
            if (error.status == 401) {
              localStorage.removeItem('token_admin');
              sessionStorage.removeItem('login_status_a');
              alert('Token Expired Please Re-Login.!');
              window.location.reload();
              return;
            }
          }
        })

      )
  }
}




