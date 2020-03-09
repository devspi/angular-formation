import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ControlProperties, ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';

@Component({
    selector: 'app-scholarship-inquiry-income',
    template: `
        <h4>Resources mensuelles</h4>

        <div *ngFor="let properties of incomeControlProperties" class="row">
            <div class="col-sm">
                <app-input [fGroup]="formLeft" [controlProperties]="properties"></app-input>
            </div>
            <div class="col-sm">
                <app-input [fGroup]="formRight" [controlProperties]="properties"></app-input>
            </div>
        </div>
    `,
    styles: []
})
export class IncomeComponent implements OnInit {
    @Input() parentFormLeft: FormGroup;
    @Input() parentFormRight: FormGroup;

    formLeft: FormGroup;
    formRight: FormGroup;

    constructor(private fb: FormBuilder, private cpService: ControlPropertiesService) {
    }

    ngOnInit(): void {
        this.formLeft = this.createIncomeSubGroup();
        this.formRight = this.createIncomeSubGroup();

        if (this.parentFormRight) {
            this.parentFormRight.registerControl(ControlKey.GRP_INCOME, this.formRight);
        }
        if (this.parentFormLeft) {
            this.parentFormLeft.registerControl(ControlKey.GRP_INCOME, this.formLeft);
        }
    }

    get incomeControlProperties() {
        const incomeControlProperties = new Array<ControlProperties>();
        incomeControlProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.MONTHLY_PAY));
        incomeControlProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.PENSION));
        incomeControlProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.LIBERAL_INCOME));
        incomeControlProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.OTHER_INCOME));
        return incomeControlProperties;
    }

    private createIncomeSubGroup(): FormGroup {
        return this.fb.group({
            [ControlKey.MONTHLY_PAY]: [''],
            [ControlKey.PENSION]: [''],
            [ControlKey.LIBERAL_INCOME]: [''],
            [ControlKey.OTHER_INCOME]: [''],
        });
    }
}
