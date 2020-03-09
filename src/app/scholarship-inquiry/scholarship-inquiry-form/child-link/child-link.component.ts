import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReferentialService} from '../../../_services/referential.service';
import {ReferentialUtil} from '../../../_helpers/referential-util';
import {ControlProperties, ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';

@Component({
    selector: 'app-child-link',
    template: `
        <h4>Lien avec l'enfant</h4>
        <div class="row">
            <div class="col-sm">
                <app-select-optional-container
                        [formGroup]="formLeft"
                        [selectItems]="childLinks"
                        [controlProperties]="link"
                        [optionalTemplate]="optionalTemplateL"
                        (valueChange)="isOptionalVisible($event)">
                </app-select-optional-container>
            </div>
            <div class="col-sm">
                <app-select-optional-container
                        [formGroup]="formRight"
                        [selectItems]="childLinks"
                        [controlProperties]="link"
                        [optionalTemplate]="optionalTemplateR"
                        (valueChange)="isOptionalVisible($event)">
                </app-select-optional-container>
            </div>
        </div>

        <ng-template #optionalTemplateL>
            <app-input [controlProperties]="linkPrecision" [fGroup]="formLeft"></app-input>
        </ng-template>
        <ng-template #optionalTemplateR>
            <app-input [controlProperties]="linkPrecision" [fGroup]="formRight"></app-input>
        </ng-template>
    `,
    styles: []
})
export class ChildLinkComponent implements OnInit {
    @Input() parentFormLeft: FormGroup;
    @Input() parentFormRight: FormGroup;

    formLeft: FormGroup;
    formRight: FormGroup;

    public childLinks = Array();

    private get controlProperties() {
        return this.cpService.getControlPropertiesMap();
    }

    get link() {
        return this.controlProperties.get(ControlKey.CHILD_LINK);
    }

    get linkPrecision() {
        return this.controlProperties.get(ControlKey.CHILD_LINK_PRECISION);
    }

    constructor(private fb: FormBuilder, private referentialService: ReferentialService, private cpService: ControlPropertiesService) {
        this.referentialService.getChildLinks().subscribe(response => {
            for (const status of response.data) {
                this.childLinks.push(status);
            }
        });
    }

    ngOnInit(): void {
        this.formLeft = this.createChildLinkSubGroup();
        this.formRight = this.createChildLinkSubGroup();

        if (this.parentFormRight) {
            this.parentFormRight.registerControl(ControlKey.GRP_CHILD_LINK, this.formRight);
        }
        if (this.parentFormLeft) {
            this.parentFormLeft.registerControl(ControlKey.GRP_CHILD_LINK, this.formLeft);
        }
    }

    private createChildLinkSubGroup(): FormGroup {
        const group = this.fb.group({
            [ControlKey.CHILD_LINK]: ['', Validators.required],
            [ControlKey.CHILD_LINK_PRECISION]: ['', Validators.required],
        });

        group.get(ControlKey.CHILD_LINK).valueChanges.subscribe(val => {
            const precision = group.get(ControlKey.CHILD_LINK_PRECISION);
            if (ReferentialUtil.isPrecisionNeededForChildLink(val)) {
                precision.setValidators(Validators.required);
            } else {
                precision.clearValidators();
            }
            precision.updateValueAndValidity();
        });

        return group;

    }

    isOptionalVisible(event) {
        event.source.optionalVisible = ReferentialUtil.isPrecisionNeededForChildLink(event.selectedItem);
    }
}
