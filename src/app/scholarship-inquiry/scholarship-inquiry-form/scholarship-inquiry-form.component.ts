import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SimulationResponse} from '../../_models/simulation/simulation-response';
import {Router} from '@angular/router';
import {SimulationForm} from '../../_models/simulation/simulationForm';
import {ControlKey} from '../../_models/controlkey';

@Component({
    selector: 'app-scholarship-inquiry-form',
    templateUrl: './scholarship-inquiry-form.component.html',
    styleUrls: ['./scholarship-inquiry-form.component.scss'],
})
export class ScholarshipInquiryFormComponent implements OnInit, AfterViewInit {

    private get identity() {
        return this.inquiryForm.get(ControlKey.GRP_IDENTITY) as FormGroup;
    }

    get applicant() {
        return this.identity.get(ControlKey.GRP_APPLICANT) as FormGroup;
    }

    get conjoint() {
        return this.identity.get(ControlKey.GRP_CONJOINT) as FormGroup;
    }

    private simulationData: SimulationForm;

    activeStep = 1;
    inquiryForm: FormGroup;

    constructor(private cdr: ChangeDetectorRef, private router: Router, private fb: FormBuilder) {
        const state = this.router.getCurrentNavigation().extras.state;
        const response: SimulationResponse = state ? state.response : undefined;
        this.simulationData = response ? response.form : new SimulationForm();
    }


    ngOnInit(): void {
        this.inquiryForm = this.fb.group({
            [ControlKey.GRP_IDENTITY]: this.createIdentityFormGroup(),
        });
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

    onSubmit() {

    }

    goToStep(step) {
        this.activeStep = step;
    }

    private createIdentityFormGroup(): FormGroup {
        return this.fb.group({
            [ControlKey.GRP_APPLICANT]: this.fb.group({}),
            [ControlKey.GRP_CONJOINT]: this.fb.group({}),
        });
    }
}
