import {Component, OnInit} from '@angular/core';
import {LoggedUser} from '@app/_models/user/logged-user';
import {AuthenticationService} from '@app/_services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    currentUser: LoggedUser;

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    ngOnInit(): void {
        this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}
