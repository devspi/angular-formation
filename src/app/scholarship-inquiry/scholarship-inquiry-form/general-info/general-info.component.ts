import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ControlProperties, ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';

const resolvedPromise = Promise.resolve(null);

@Component({
    selector: 'app-scholarship-inquiry-general-info',
    template: `
        <h4>Identité</h4>
        <div *ngFor="let properties of generalInfoControlProperties" class="row">
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
export class GeneralInfoComponent implements OnInit {

    @Input() parentFormLeft: FormGroup;
    @Input() parentFormRight: FormGroup;

    @Input() formLeft: FormGroup;
    @Input() formRight: FormGroup;

    constructor(private fb: FormBuilder, private cpService: ControlPropertiesService) {
    }

    ngOnInit(): void {
        this.formLeft = this.createGeneralInfoSubGroup();
        this.formRight = this.createGeneralInfoSubGroup();

        if (this.parentFormRight) {
            this.parentFormRight.addControl(ControlKey.GRP_GENERAL_INFO, this.formRight);
        }
        if (this.parentFormLeft) {
            this.parentFormLeft.addControl(ControlKey.GRP_GENERAL_INFO, this.formLeft);
        }
    }

    private createGeneralInfoSubGroup(): FormGroup {
        return this.fb.group({
            [ControlKey.BIRTHNAME]: ['', Validators.required],
            [ControlKey.MARRIEDNAME]: [''],
            [ControlKey.FIRSTNAME]: ['', Validators.required],
            [ControlKey.DATE_OF_BIRTH]: ['', Validators.required],
            [ControlKey.PLACE_OF_BIRTH]: ['', Validators.required],
            [ControlKey.NATIONALITY]: ['', Validators.required],
            [ControlKey.PRCT_HANDI]: [''],
        });
    }

    get generalInfoControlProperties(): Array<ControlProperties> {
        const generalInfoProperties = new Array<ControlProperties>();
        generalInfoProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.BIRTHNAME));
        generalInfoProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.MARRIEDNAME));
        generalInfoProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.FIRSTNAME));
        generalInfoProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.DATE_OF_BIRTH));
        generalInfoProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.PLACE_OF_BIRTH));
        generalInfoProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.NATIONALITY));
        generalInfoProperties.push(this.cpService.getControlPropertiesMap().get(ControlKey.PRCT_HANDI));
        return generalInfoProperties;
    }

}
