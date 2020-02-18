import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SimulationService {

    url = 'http://localhost:8080/pam-bscserv/api/simulate';

    constructor(private http: HttpClient) {
    }

    sendSimulation(userData) {
        return this.http.post<any>(this.url, userData);
    }
}
