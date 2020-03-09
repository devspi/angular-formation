import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SimulationResponse} from '../../_models/simulation/simulation-response';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SimulationForm} from '../../_models/simulation/simulationForm';
import {ScholarshipService} from '../../_services/scholarship.service';
import {ControlPropertiesService} from '../../_services/control-properties.service';
import {ControlKey} from '../../_models/controlkey';
import {ReferentialService} from '../../_services/referential.service';

@Component({
    selector: 'app-no-scholarship-certificate-form',
    templateUrl: './no-scholarship-certificate-form.component.html',
    styleUrls: ['./no-scholarship-certificate-form.component.scss']
})
export class NoScholarshipCertificateFormComponent implements OnInit, AfterViewInit {

    simulationForm: SimulationForm;
    public certificateForm: FormGroup;

    get incomeProp() {
        return this.controlPropertiesService.getControlPropertiesMap().get(ControlKey.INCOME);
    }

    get firstNameProp() {
        return this.controlPropertiesService.getControlPropertiesMap().get(ControlKey.FIRSTNAME);
    }

    get familyNameProp() {
        return this.controlPropertiesService.getControlPropertiesMap().get(ControlKey.FAMILYNAME);
    }

    constructor(private cdr: ChangeDetectorRef, private router: Router, private fb: FormBuilder, private scholarshipService: ScholarshipService, private controlPropertiesService: ControlPropertiesService, private referentialService: ReferentialService) {
        const response: SimulationResponse = this.router.getCurrentNavigation().extras.state.response;
        this.simulationForm = response.form;
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.certificateForm = this.fb.group({
            [ControlKey.FAMILYNAME]: ['', Validators.required],
            [ControlKey.FIRSTNAME]: ['', Validators.required],
            [ControlKey.INCOME]: ['', Validators.required],
            [ControlKey.NBR_CHILDREN]: [null, Validators.required],
            [ControlKey.CHILDREN]: this.fb.array([]),
        });

        this.certificateForm.patchValue({
            [ControlKey.INCOME]: this.simulationForm.income,
        });
    }

    onSubmit() {
        this.scholarshipService.generateNoScholarshipCertificate(this.certificateForm.value).subscribe(
            response => console.log(response),
            error => console.log(error));
    }

}
