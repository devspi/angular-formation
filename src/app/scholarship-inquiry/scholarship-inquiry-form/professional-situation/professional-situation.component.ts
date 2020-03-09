import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReferentialService} from '../../../_services/referential.service';
import {ReferentialUtil} from '../../../_helpers/referential-util';
import {ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';

@Component({
    selector: 'app-professional-situation',
    template: `
        <h4>Situation professionelle</h4>
        <div class="row">
            <div class="col-sm">
                <app-select-optional-container
                        [formGroup]="formLeft"
                        [selectItems]="proStatus"
                        [controlProperties]="situation"
                        (valueChange)="isOptionalVisible($event)"
                        [optionalTemplate]="optionalTemplateL">
                </app-select-optional-container>
                <div class="col-sm">
                    <app-input [fGroup]="formLeft" [controlProperties]="jobTitle">
                    </app-input>
                </div>
                <div class="col-sm">
                    <app-input [fGroup]="formLeft" [controlProperties]="employerName">
                    </app-input>
                </div>
            </div>
            <div class="col-sm">
                <app-select-optional-container
                        [formGroup]="formRight"
                        [selectItems]="proStatus"
                        [controlProperties]="situation"
                        (valueChange)="isOptionalVisible($event)"
                        [optionalTemplate]="optionalTemplateR">
                </app-select-optional-container>
                <div class="col-sm">
                    <app-input [fGroup]="formRight" [controlProperties]="jobTitle">
                    </app-input>
                </div>
                <div class="col-sm">
                    <app-input [fGroup]="formRight" [controlProperties]="employerName">
                    </app-input>
                </div>
            </div>
        </div>

        <ng-template #optionalTemplateL>
            <app-input [controlProperties]="situationDate" [fGroup]="formLeft"></app-input>
        </ng-template>
        <ng-template #optionalTemplateR>
            <app-input [controlProperties]="situationDate" [fGroup]="formRight"></app-input>
        </ng-template>
    `,
    styles: []
})
export class ProfessionalSituationComponent implements OnInit {
    @Input() parentFormLeft: FormGroup;
    @Input() parentFormRight: FormGroup;

    formLeft: FormGroup;
    formRight: FormGroup;

    public proStatus = Array();

    constructor(private fb: FormBuilder, private referentialService: ReferentialService, private cpService: ControlPropertiesService) {
        this.referentialService.getProSituations().subscribe(response => {
            for (const status of response.data) {
                this.proStatus.push(status);
            }
        });
    }

    private get controlProperties() {
        return this.cpService.getControlPropertiesMap();
    }

    get situationDate() {
        return this.controlProperties.get(ControlKey.PRO_SITUATION_DATE);
    }

    get situation() {
        return this.controlProperties.get(ControlKey.PRO_SITUATION);
    }

    get employerName() {
        return this.controlProperties.get(ControlKey.EMPLOYER_NAME);
    }

    get jobTitle() {
        return this.controlProperties.get(ControlKey.JOB_TITLE);
    }


    ngOnInit(): void {
        this.formLeft = this.createProSituationSubGroup();
        this.formRight = this.createProSituationSubGroup();

        if (this.parentFormRight) {
            this.parentFormRight.registerControl(ControlKey.GRP_PRO_SITUATION, this.formRight);
        }
        if (this.parentFormLeft) {
            this.parentFormLeft.registerControl(ControlKey.GRP_PRO_SITUATION, this.formLeft);
        }
    }

    private createProSituationSubGroup(): FormGroup {
        const group = this.fb.group({
            [ControlKey.PRO_SITUATION]: ['', Validators.required],
            [ControlKey.PRO_SITUATION_DATE]: [''],
            [ControlKey.JOB_TITLE]: [''],
            [ControlKey.EMPLOYER_NAME]: [''],
        });

        group.get(ControlKey.PRO_SITUATION).valueChanges.subscribe(val => {
            const date = group.get(ControlKey.PRO_SITUATION_DATE);
            if (ReferentialUtil.isDateNeededForProStatus(val)) {
                date.setValidators(Validators.required);
            } else {
                date.clearValidators();
            }
            date.updateValueAndValidity();
        });

        return group;
    }

    isOptionalVisible(event) {
        event.source.optionalVisible = ReferentialUtil.isDateNeededForProStatus(event.selectedItem);
    }
}
