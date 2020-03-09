import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReferentialService} from '../../../_services/referential.service';
import {ReferentialUtil} from '../../../_helpers/referential-util';
import {ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';

@Component({
    selector: 'app-family-situation',
    template: `
        <h4>Situation familiale</h4>
        <div class="row">
            <div class="col-sm">
                <app-select-optional-container
                        [formGroup]="formLeft"
                        [selectItems]="maritalStatusItems"
                        [controlProperties]="maritalStatus"
                        (valueChange)="isOptionalVisible($event)"
                        [optionalTemplate]="optionalTemplateL">
                </app-select-optional-container>
            </div>
            <div class="col-sm">
                <app-select-optional-container
                        [formGroup]="formRight"
                        [selectItems]="maritalStatusItems"
                        [controlProperties]="maritalStatus"
                        (valueChange)="isOptionalVisible($event)"
                        [optionalTemplate]="optionalTemplateR">
                </app-select-optional-container>
            </div>
        </div>

        <ng-template #optionalTemplateL>
            <app-input [controlProperties]="maritalSituationDate" [fGroup]="formLeft"></app-input>
        </ng-template>
        <ng-template #optionalTemplateR>
            <app-input [controlProperties]="maritalSituationDate" [fGroup]="formRight"></app-input>
        </ng-template>
    `,
    styles: []
})
export class FamilySituationComponent implements OnInit {

    @Input() parentFormLeft: FormGroup;
    @Input() parentFormRight: FormGroup;


    formLeft: FormGroup;
    formRight: FormGroup;

    public maritalStatusItems = Array();

    private get controlProperties() {
        return this.cpService.getControlPropertiesMap();
    }

    get maritalStatus() {
        return this.controlProperties.get(ControlKey.MARITAL_STATUS);
    }

    get maritalSituationDate() {
        return this.controlProperties.get(ControlKey.MARITAL_SITUATION_DATE);
    }

    constructor(private fb: FormBuilder, private referentialService: ReferentialService, private cpService: ControlPropertiesService) {
    }

    ngOnInit(): void {
        this.formLeft = this.createFamilySituationSubGroup();
        this.formRight = this.createFamilySituationSubGroup();

        if (this.parentFormRight) {
            this.parentFormRight.registerControl(ControlKey.GRP_FAMILY_SITUATION, this.formRight);
        }
        if (this.parentFormLeft) {
            this.parentFormLeft.registerControl(ControlKey.GRP_FAMILY_SITUATION, this.formLeft);
        }
        this.referentialService.getMaritalStatus().subscribe(response => {
            for (const status of response.data) {
                this.maritalStatusItems.push(status);
            }
        });
    }

    isOptionalVisible(event) {
        event.source.optionalVisible = ReferentialUtil.isDateNeededForMaritalStatus(event.selectedItem);
    }

    private createFamilySituationSubGroup(): FormGroup {
        const group = this.fb.group({
            [ControlKey.MARITAL_STATUS]: ['', Validators.required],
            [ControlKey.MARITAL_SITUATION_DATE]: [''],
        });

        group.get(ControlKey.MARITAL_STATUS).valueChanges.subscribe(val => {
            const date = group.get(ControlKey.MARITAL_SITUATION_DATE);
            if (ReferentialUtil.isDateNeededForMaritalStatus(val)) {
                date.setValidators(Validators.required);
            } else {
                date.clearValidators();
            }
            date.updateValueAndValidity();
        });
        return group;
    }
}
