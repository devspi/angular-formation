import {Component, OnInit} from '@angular/core';
import {UserService} from '@app/_services/user.service';
import {AuthenticationService} from '@app/_services/authentication.service';
import {LoggedUser} from '@app/_models/user/logged-user';
import {ChildInfo} from '@app/_models/scolarship-inquiry/scholarship-inquiry-details';

@Component({
    selector: 'app-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

    user: LoggedUser;
    childrenInfo: Array<ChildInfo>;
    columns: Array<string>;

    constructor(private authenticationService: AuthenticationService, private userService: UserService) {
    }

    ngOnInit(): void {
        this.user = this.authenticationService.currentUserValue;
        this.userService.getHomeDetails(this.user).subscribe(
            data => {
                this.childrenInfo = data.childrenInfo;
                this.columns = Object.keys(data.childrenInfo[0]);
                console.log(this.childrenInfo);
                console.log(this.columns);
            }, error => {

            });
    }
}
