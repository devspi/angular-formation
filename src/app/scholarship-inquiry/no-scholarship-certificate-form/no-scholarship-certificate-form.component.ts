import {Component, OnInit} from '@angular/core';
import {SimulationResponse} from '../../model/simulation/simulation-response';
import {Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SimulationForm} from '../../model/simulation/simulationForm';
import {ScholarshipService} from '../../services/scholarship.service';

@Component({
    selector: 'app-no-scholarship-certificate-form',
    templateUrl: './no-scholarship-certificate-form.component.html',
    styleUrls: ['./no-scholarship-certificate-form.component.scss']
})
export class NoScholarshipCertificateFormComponent implements OnInit {

    public numbers = Array(15).fill(null).map((x, i) => i + 1);

    simulationForm: SimulationForm;
    public certificateForm: FormGroup;
    private savedNbrChildren = 0;

    get income() {
        return this.certificateForm.get('income');
    }

    get nbrChildren() {
        return this.certificateForm.get('nbrChildren');
    }

    get children() {
        return this.certificateForm.get('children') as FormArray;
    }

    get firstName() {
        return this.certificateForm.get('firstName');
    }

    get familyName() {
        return this.certificateForm.get('familyName');
    }


    constructor(private router: Router, private fb: FormBuilder, private scholarshipService: ScholarshipService) {
        const response: SimulationResponse = this.router.getCurrentNavigation().extras.state.response;
        this.simulationForm = response.form;
    }

    ngOnInit(): void {
        this.certificateForm = this.fb.group({
            familyName: ['', Validators.required],
            firstName: ['', Validators.required],
            income: ['', Validators.required],
            nbrChildren: ['', Validators.required],
            children: this.fb.array([]),
        });

        this.nbrChildren.valueChanges.subscribe(val => {
            this.buildChildrenFormGroup(val);
        });

        this.certificateForm.patchValue({
            income: this.simulationForm.income,
            nbrChildren: this.simulationForm.nbrChildren,
        });

        this.children.patchValue(this.simulationForm.children);

    }

    buildChildrenFormGroup(nbr: number) {
        while (nbr < this.savedNbrChildren) {
            this.children.removeAt(this.children.length - 1);
            this.savedNbrChildren--;
        }
        while (this.savedNbrChildren < nbr) {
            this.children.push(this.fb.group({
                familyName: ['', Validators.required],
                firstName: ['', Validators.required],
                scholarLevel: ['', Validators.required]
            }));
            this.savedNbrChildren++;
        }
    }

    onSubmit() {
        this.scholarshipService.generateNoScholarshipCertificate(this.certificateForm.value).subscribe(
            response => console.log(response),
            error => console.log(error));
    }

}
