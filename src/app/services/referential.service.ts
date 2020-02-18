import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MaritalStatus} from '../model/referential/marital-status';

@Injectable({
    providedIn: 'root'
})
export class ReferentialService {

    baseUrl = 'http://localhost:8080/pam-bscserv/api/referential';
    scholarLevelsUrl = this.baseUrl + '/scholarLevels';
    maritalStatusUrl = this.baseUrl + '/maritalStatus';
    childLinksUrl = this.baseUrl + '/childLinks';
    proSituationsUrl = this.baseUrl + '/proSituations';

    constructor(private http: HttpClient) {
    }

    getScholarLevel() {
        return this.http.get<any>(this.scholarLevelsUrl);
    }

    getMaritalStatus() {
        return this.http.get<any>(this.maritalStatusUrl);
    }

    getChildLinks() {
        return this.http.get<any>(this.childLinksUrl);
    }

    getProSituations() {
        return this.http.get<any>(this.proSituationsUrl);
    }
}
