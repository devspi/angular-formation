import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SimulationResponse} from '../../model/simulation/simulation-response';
import {Router} from '@angular/router';
import {SimulationForm} from '../../model/simulation/simulationForm';
import {LabelPropertiesService} from '../../services/label-properties.service';
import {MaritalStatusUtil} from '../../util/marital-status-util';
import {InlineInputTextComponent} from './components/inline-input-text/inline-input-text.component';

@Component({
    selector: 'app-scholarship-inquiry-form',
    templateUrl: './scholarship-inquiry-form.component.html',
    styleUrls: ['./scholarship-inquiry-form.component.scss']
})
export class ScholarshipInquiryFormComponent implements OnInit {
    private simulationData: SimulationForm;

    public inquiryForm: FormGroup;

    private savedNbrChildren = 0;

    get identity() {
        return this.inquiryForm.get('identity') as FormGroup;
    }

    get applicant() {
        return this.identity.get('applicant') as FormGroup;
    }

    get conjoint() {
        return this.identity.get('conjoint') as FormGroup;
    }

    get childrenInfo() {
        return this.inquiryForm.get('childrenInfo');
    }

    get childrenList() {
        return this.childrenInfo.get('children') as FormArray;
    }

    get nbrChildren() {
        return this.childrenInfo.get('nbrChildren');
    }

    getKeyLabelMap(sectionName): Map<string, string> {
        return this.labelpropertiesService.getScholarshipInquiryIdentityLabelMap(sectionName);
    }

    constructor(private router: Router, private fb: FormBuilder, private labelpropertiesService: LabelPropertiesService) {
        const state = this.router.getCurrentNavigation().extras.state;
        const response: SimulationResponse = state ? state.response : undefined;
        this.simulationData = response ? response.form : new SimulationForm();
    }

    createInlineInputText() {
        return new InlineInputTextComponent();
    }

    ngOnInit(): void {
        this.inquiryForm = this.fb.group({
            identity: this.createIdentityFormGroup(),
            contactInfo: this.createContactInfoFormGroup(),
            childrenInfo: this.createChildrenFormGroup()
        });

        this.nbrChildren.valueChanges.subscribe(val => {
            this.buildChildrenListForm(val);
        });

        this.nbrChildren.setValue(this.simulationData.nbrChildren);
    }

    onSubmit() {

    }

    private createIdentityFormGroup(): FormGroup {
        return this.fb.group({
            applicant: this.createApplicantFormGroup(),
            conjoint: this.createApplicantFormGroup(),
        });
    }

    private createApplicantFormGroup(): FormGroup {
        return this.fb.group({
            generalInfo: this.createGeneralInfoSubGroup(),
            familySituation: this.createFamilySituationSubGroup(),
            childLink: this.createChildLinkSubGroup(),
            proSituation: this.createProSituationSubGroup(),
            income: this.createIncomeSubGroup(),
            socialSecurity: this.createSocialSecuritySubGroup(),
        });
    }

    private createGeneralInfoSubGroup(): FormGroup {
        return this.fb.group({
            birthName: ['', Validators.required],
            marriedName: [''],
            firstName: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            placeOfBirth: ['', Validators.required],
            nationality: ['', Validators.required],
            prctHandi: [''],
        });
    }


    private createFamilySituationSubGroup(): FormGroup {

        function conditionalValidator(predicate) {
            return (formControl => {
                if (!formControl.parent) {
                    return null;
                }
                if (predicate()) {
                    return Validators.required(formControl);
                }
                return null;
            });
        }

        const group = this.fb.group({
            maritalStatus: ['', Validators.required],
            situationDate: ['', Validators.required, conditionalValidator(() => MaritalStatusUtil.isDateNeeded(group.get('maritalStatus').value))],
        });

        return group;
    }

    private createChildLinkSubGroup(): FormGroup {
        return this.fb.group({
            link: ['', Validators.required],
            comment: ['', Validators.required],
        });
    }

    private createProSituationSubGroup(): FormGroup {
        return this.fb.group({
            situation: ['', Validators.required],
            date: [''],
            job: [''],
            employerName: [''],
        });
    }

    private createIncomeSubGroup(): FormGroup {
        return this.fb.group({
            monthlyPay: [''],
            pension: [''],
            liberalIncome: [''],
            other: [''],
        });
    }

    private createSocialSecuritySubGroup(): FormGroup {
        return this.fb.group({
            organisms: [''],
        });
    }

    private createContactInfoFormGroup() {
        return this.fb.group({
            at: [''],
            apptNbr: [''],
            stair: [''],
            batInfo: [''],
            street: [''],
            district: [''],
            bp: [''],
            postalCode: [''],
            city: [''],
            phoneHome: [''],
            phoneWork: [''],
            phoneCell: [''],
            email: ['']
        });
    }


    private createChildrenFormGroup() {
        return this.fb.group({
            nbrChildren: ['', Validators.required],
            children: this.fb.array([])
        });
    }

    private createChildFormGroup(): FormGroup {
        return this.fb.group({
            familyName: ['', Validators.required],
            firstName: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            gender: ['', Validators.required],
            prctHandi: ['', Validators.required],
            lastYearScholarLevel: ['', Validators.required],
            nextYearScholarLevel: ['', Validators.required],
            nextYearSchool: ['', Validators.required],
            unschooled: ['', Validators.required],
        });
    }

    private buildChildrenListForm(nbr: number) {
        while (nbr < this.savedNbrChildren) {
            this.childrenList.removeAt(this.childrenList.length - 1);
            this.savedNbrChildren--;
        }
        while (this.savedNbrChildren < nbr) {
            this.childrenList.push(this.createChildFormGroup());
            this.savedNbrChildren++;
        }
    }
}
