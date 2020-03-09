import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SimulationResponse} from '../../_models/simulation/simulation-response';

@Component({
    selector: 'app-simulation-result',
    templateUrl: './simulation-result.component.html',
    styleUrls: ['./simulation-result.component.scss']
})
export class SimulationResultComponent implements OnInit {

    public response: SimulationResponse;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this.response = this.router.getCurrentNavigation().extras.state.response;
    }

    ngOnInit(): void {
    }

    gotoScholarshipInquiry() {
        this.router.navigateByUrl('/scholarship/inquiry', {state: {response: this.response}});
    }

    gotoNoScholarshipCertificate() {
        this.router.navigateByUrl('/scholarship/noscholarship-certificate', {state: {response: this.response}});
    }
}
