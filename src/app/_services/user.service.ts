import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoggedUser} from '../_models/user/logged-user';
import {Observable} from 'rxjs';
import {UserDetail} from '@app/_models/user/user-detail';
import {UserScholarshipInquiries} from '@app/_models/user/user-scholarship-inquiries';
import {UserHome} from '@app/_models/user/user-home';


@Injectable({providedIn: 'root'})
export class UserService {

    userDetailUrl = 'http://localhost:8080/pam-bscserv/api/user/details';
    userScholarshipInquiriesUrl = 'http://localhost:8080/pam-bscserv/api/user/scholarshipInquiries';
    userHomeDetailUrl = 'http://localhost:8080/pam-bscserv/api/user/homeDetails';
    updateDetailsUrl = 'http://localhost:8080/pam-bscserv/api/user/updateDetails';

    constructor(private http: HttpClient) {
    }

    getUserDetails(user: LoggedUser): Observable<UserDetail> {
        return this.http.post<any>(this.userDetailUrl, {userId: user.id, token: user.token});
    }

    updateAddressInfo(user: LoggedUser, data: any) {
        return this.http.post<any>(this.updateDetailsUrl, {user: {userId: user.id, token: user.token}, addressInfo: data});
    }

    updateContactInfo(user: LoggedUser, data: any) {
        return this.http.post<any>(this.updateDetailsUrl, {user: {userId: user.id, token: user.token}, contactInfo: data});
    }

    updateBankInfo(user: LoggedUser, data: any) {
        return this.http.post<any>(this.updateDetailsUrl, {user: {userId: user.id, token: user.token}, bankInfo: data});
    }

    getScholarshipInquiries(user: LoggedUser): Observable<UserScholarshipInquiries> {
        return this.http.post<any>(this.userScholarshipInquiriesUrl, {userId: user.id, token: user.token});
    }

    getHomeDetails(user: LoggedUser): Observable<UserHome> {
        return this.http.post<any>(this.userHomeDetailUrl, {userId: user.id, token: user.token});
    }
}
