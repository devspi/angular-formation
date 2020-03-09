import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '@app/_services/authentication.service';
import {LoggedUser} from '@app/_models/user/logged-user';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

    user: LoggedUser;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.authenticationService.currentUser.subscribe(user => {
            this.user = user;
        });
    }

}
