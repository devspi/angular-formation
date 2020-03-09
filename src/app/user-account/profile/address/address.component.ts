import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDetail} from '@app/_models/user/user-detail';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-address-form',
    template: `
        <form [formGroup]="form" (ngSubmit)="updateAddress()">
            <div class="form-row">
                <div class="form-group col-md-12">
                    <app-input [fGroup]="form" [controlProperties]="at" [inline]="false"></app-input>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-sm-5">
                    <app-input [fGroup]="form" [controlProperties]="apptNbr" [inline]="false"></app-input>
                </div>
                <div class="form-group col-sm-2">
                    <app-input [fGroup]="form" [controlProperties]="stair" [inline]="false"></app-input>
                </div>
                <div class="form-group col-sm-5">
                    <app-input [fGroup]="form" [controlProperties]="batInfo" [inline]="false"></app-input>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-8">
                    <app-input [fGroup]="form" [controlProperties]="street" [inline]="false"></app-input>
                </div>
                <div class="form-group col-md-4">
                    <app-input [fGroup]="form" [controlProperties]="district" [inline]="false"></app-input>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <app-input [fGroup]="form" [controlProperties]="bp" [inline]="false"></app-input>
                </div>
                <div class="form-group col-md-3">
                    <app-input [fGroup]="form" [controlProperties]="postalCode" [inline]="false"></app-input>
                </div>
                <div class="form-group col-md-6">
                    <app-input [fGroup]="form" [controlProperties]="city" [inline]="false"></app-input>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Enregistrer</button>
        </form>
    `,
    styles: []
})
export class AddressComponent implements OnInit {

    @Input() detailObservable: Observable<UserDetail>;
    @Input() parentForm: FormGroup;
    @Output() saveEvent = new EventEmitter<any>();
    form: FormGroup;

    private get controlProperties() {
        return this.cpService.getControlPropertiesMap();
    }

    get at() {
        return this.controlProperties.get(ControlKey.ADDRESS_AT);
    }

    get apptNbr() {
        return this.controlProperties.get(ControlKey.ADDRESS_APPT_NBR);
    }

    get stair() {
        return this.controlProperties.get(ControlKey.ADDRESS_STAIR);
    }

    get batInfo() {
        return this.controlProperties.get(ControlKey.ADDRESS_BAT_INFO);
    }

    get street() {
        return this.controlProperties.get(ControlKey.ADDRESS_STREET);
    }

    get district() {
        return this.controlProperties.get(ControlKey.ADDRESS_DISTRICT);
    }

    get bp() {
        return this.controlProperties.get(ControlKey.ADDRESS_BP);
    }

    get postalCode() {
        return this.controlProperties.get(ControlKey.ADDRESS_POSTAL_CODE);
    }

    get city() {
        return this.controlProperties.get(ControlKey.ADDRESS_CITY);
    }

    constructor(private fb: FormBuilder,
                private cpService: ControlPropertiesService) {
    }

    ngOnInit(): void {
        this.form = this.createContactInfoFormGroup();

        this.detailObservable.subscribe(detail => {
            this.form.patchValue({
                [ControlKey.ADDRESS_AT]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_AT],
                [ControlKey.ADDRESS_APPT_NBR]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_APPT_NBR],
                [ControlKey.ADDRESS_STAIR]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_STAIR],
                [ControlKey.ADDRESS_BAT_INFO]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_BAT_INFO],
                [ControlKey.ADDRESS_STREET]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_STREET],
                [ControlKey.ADDRESS_DISTRICT]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_DISTRICT],
                [ControlKey.ADDRESS_BP]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_BP],
                [ControlKey.ADDRESS_POSTAL_CODE]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_POSTAL_CODE],
                [ControlKey.ADDRESS_CITY]: detail[ControlKey.GRP_ADDRESS_INFO][ControlKey.ADDRESS_CITY]
            });
        });

        if (this.parentForm) {
            this.parentForm.addControl(ControlKey.GRP_ADDRESS_INFO, this.form);
        }
    }

    private createContactInfoFormGroup() {
        return this.fb.group({
            [ControlKey.ADDRESS_AT]: [],
            [ControlKey.ADDRESS_APPT_NBR]: [],
            [ControlKey.ADDRESS_STAIR]: [],
            [ControlKey.ADDRESS_BAT_INFO]: [],
            [ControlKey.ADDRESS_STREET]: [Validators.required],
            [ControlKey.ADDRESS_DISTRICT]: [],
            [ControlKey.ADDRESS_BP]: [],
            [ControlKey.ADDRESS_POSTAL_CODE]: [Validators.required],
            [ControlKey.ADDRESS_CITY]: [Validators.required],
        });
    }

    updateAddress() {
        console.log(this.form.value);
        this.saveEvent.emit(this.form.value);
    }
}
