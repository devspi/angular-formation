import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserDetail} from '@app/_models/user/user-detail';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-bank-form',
    template: `
        <form [formGroup]="form" (ngSubmit)="updateBank()">
            <div class="row">
                <div class="form-group col-md-12">
                    <app-input [fGroup]="form" [controlProperties]="bankName"></app-input>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <app-input [fGroup]="form" [controlProperties]="address"></app-input>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <app-input [fGroup]="form" [controlProperties]="iban"></app-input>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <app-input [fGroup]="form" [controlProperties]="bic"></app-input>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <app-input [fGroup]="form" [controlProperties]="bankCode" [inline]="false"></app-input>
                </div>
                <div class="form-group col-md-3">
                    <app-input [fGroup]="form" [controlProperties]="codeGuichet" [inline]="false"></app-input>
                </div>
                <div class="form-group col-md-4">
                    <app-input [fGroup]="form" [controlProperties]="accountNbr" [inline]="false"></app-input>
                </div>
                <div class="form-group col-md-2">
                    <app-input [fGroup]="form" [controlProperties]="ribKey" [inline]="false"></app-input>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Enregistrer</button>
        </form>
    `,
    styles: []
})
export class BankComponent implements OnInit {

    @Input() detailObservable: Observable<UserDetail>;
    @Input() parentForm: FormGroup;
    @Output() saveEvent = new EventEmitter<any>();

    form: FormGroup;

    private get controlProperties() {
        return this.cpService.getControlPropertiesMap();
    }

    get address() {
        return this.controlProperties.get(ControlKey.BANK_ADDRESS);
    }

    get bankName() {
        return this.controlProperties.get(ControlKey.BANK_NAME);
    }

    get bankCode() {
        return this.controlProperties.get(ControlKey.BANK_CODE);
    }

    get codeGuichet() {
        return this.controlProperties.get(ControlKey.BANK_CODE_GUICHET);
    }

    get iban() {
        return this.controlProperties.get(ControlKey.BANK_IBAN);
    }

    get bic() {
        return this.controlProperties.get(ControlKey.BANK_BIC);
    }

    get ribKey() {
        return this.controlProperties.get(ControlKey.BANK_RIB_KEY);
    }

    get accountNbr() {
        return this.controlProperties.get(ControlKey.BANK_ACCOUNT_NBR);
    }

    constructor(private fb: FormBuilder, private cpService: ControlPropertiesService) {
    }

    ngOnInit(): void {
        this.form = this.createContactInfoFormGroup();

        this.detailObservable.subscribe(detail => {
            this.form.patchValue({
                [ControlKey.BANK_NAME]: detail[ControlKey.GRP_BANK_INFO][ControlKey.BANK_NAME],
                [ControlKey.BANK_ADDRESS]: detail[ControlKey.GRP_BANK_INFO][ControlKey.BANK_ADDRESS],
                [ControlKey.BANK_BIC]: detail[ControlKey.GRP_BANK_INFO][ControlKey.BANK_BIC],
                [ControlKey.BANK_IBAN]: detail[ControlKey.GRP_BANK_INFO][ControlKey.BANK_IBAN],
                [ControlKey.BANK_CODE]: detail[ControlKey.GRP_BANK_INFO][ControlKey.BANK_CODE],
                [ControlKey.BANK_CODE_GUICHET]: detail[ControlKey.GRP_BANK_INFO][ControlKey.BANK_CODE_GUICHET],
                [ControlKey.BANK_ACCOUNT_NBR]: detail[ControlKey.GRP_BANK_INFO][ControlKey.BANK_ACCOUNT_NBR],
                [ControlKey.BANK_RIB_KEY]: detail[ControlKey.GRP_BANK_INFO][ControlKey.BANK_RIB_KEY],
            });
        });

        if (this.parentForm) {
            this.parentForm.addControl(ControlKey.GRP_BANK_INFO, this.form);
        }
    }

    private createContactInfoFormGroup() {
        return this.fb.group({
            [ControlKey.BANK_NAME]: [],
            [ControlKey.BANK_ADDRESS]: [],
            [ControlKey.BANK_BIC]: [],
            [ControlKey.BANK_IBAN]: [],
            [ControlKey.BANK_CODE]: [],
            [ControlKey.BANK_CODE_GUICHET]: [],
            [ControlKey.BANK_ACCOUNT_NBR]: [],
            [ControlKey.BANK_RIB_KEY]: [],
        });
    }

    updateBank() {
        this.saveEvent.emit(this.form.value);
    }
}
