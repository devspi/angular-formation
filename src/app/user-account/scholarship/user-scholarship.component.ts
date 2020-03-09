import {Component, OnInit} from '@angular/core';
import {LoggedUser} from '@app/_models/user/logged-user';

@Component({
    selector: 'app-user-scholarship',
    templateUrl: './user-scholarship.component.html',
    styleUrls: ['./user-scholarship.component.scss']
})
export class UserScholarshipComponent implements OnInit {

    user: LoggedUser;

    constructor() {
    }

    ngOnInit(): void {

    }
}
