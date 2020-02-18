import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ScholarshipService {

    baseUrl = 'http://localhost:8080/pam-bscserv/api/scholarship';
    noScholarshipCertificateURL = this.baseUrl + '/generateNoScholarshipCertificate';

    constructor(private http: HttpClient) {
    }

    generateNoScholarshipCertificate(userData) {
        return this.http.post<any>(this.noScholarshipCertificateURL, userData);
    }
}
