import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoggedUser} from '../_models/user/logged-user';
import {ControlKey} from '@app/_models/controlkey';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<LoggedUser>;
    public currentUser: Observable<LoggedUser>;

    loginUrl = 'http://localhost:8080/pam-bscserv/api/login';


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<LoggedUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): LoggedUser {
        return this.currentUserSubject.value;
    }

    login(email, password) {
        return this.http.post<any>(this.loginUrl, {email, password})
            .pipe(map(response => {
                const loggedUser = this.marshallToLoggedUser(response);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(loggedUser));
                this.currentUserSubject.next(loggedUser);
                return response;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    private marshallToLoggedUser(response): LoggedUser {
        return {
            token: response.token,
            id: response.user.id,
            [ControlKey.AUTH_EMAIL]: response.user[ControlKey.AUTH_EMAIL],
            [ControlKey.AUTH_PASSWORD]: response.user[ControlKey.AUTH_PASSWORD],
            [ControlKey.FAMILYNAME]: response.user[ControlKey.FAMILYNAME],
            [ControlKey.FIRSTNAME]: response.user[ControlKey.FIRSTNAME],
        };
    }
}
