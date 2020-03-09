import {Component, OnInit} from '@angular/core';
import {LoggedUser} from '@app/_models/user/logged-user';
import {AuthenticationService} from '@app/_services/authentication.service';
import {UserService} from '@app/_services/user.service';
import {ScholarshipInquiry} from '@app/_models/scolarship-inquiry/scholarship-inquiry';

@Component({
    selector: 'app-inquiries',
    templateUrl: './inquiries.component.html',
    styleUrls: ['./inquiries.component.scss']
})
export class InquiriesComponent implements OnInit {

    user: LoggedUser;
    inquiries: Array<ScholarshipInquiry>;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService) {
    }

    ngOnInit(): void {
        this.user = this.authenticationService.currentUserValue;
        this.userService.getScholarshipInquiries(this.user).subscribe(
            data => {
                this.inquiries = data.scholarshipInquiries;
            }, error => {
                console.log('error:' + error);
            });
    }
}
