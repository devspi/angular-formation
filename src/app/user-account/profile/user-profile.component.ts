import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '@app/_services/authentication.service';
import {LoggedUser} from '@app/_models/user/logged-user';
import {UserDetail} from '@app/_models/user/user-detail';
import {UserService} from '@app/_services/user.service';
import {Observable} from 'rxjs';
import {AlertService} from '@app/_services/alert.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    user: LoggedUser;
    userDetailObservable: Observable<UserDetail>;
    active: any;

    constructor(
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService) {
    }

    ngOnInit(): void {
        this.user = this.authenticationService.currentUserValue;
        this.userDetailObservable = this.userService.getUserDetails(this.user);
    }

    saveAddressInfo(userData: any) {
        this.userService.updateAddressInfo(this.user, userData).subscribe(
            data => {
                this.alertService.success('Informations mises à jour avec succés', false);
            },
            error => {
                this.alertService.error('Erreur : ' + error, false);
            });
    }

    saveContactInfo(userData: any) {
        this.userService.updateContactInfo(this.user, userData).subscribe(
            data => {
                this.alertService.success('Informations mises à jour avec succés', false);
            },
            error => {
                this.alertService.error('Erreur : ' + error, false);
            });
    }

    saveBankInfo(userData: any) {
        this.userService.updateBankInfo(this.user, userData).subscribe(
            data => {
                this.alertService.success('Informations mises à jour avec succés', false);
            },
            error => {
                this.alertService.error('Erreur : ' + error, false);
            });
    }
}
