import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserDetail} from '@app/_models/user/user-detail';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-contact-form',
    template: `
        <form [formGroup]="form" (ngSubmit)="updateContact()">

            <div class="form-row">
                <div class="form-group col-md-4">
                    <app-input [fGroup]="form" [controlProperties]="phoneHome" [inline]="false"></app-input>
                </div>
                <div class="form-group col-md-4">
                    <app-input [fGroup]="form" [controlProperties]="phoneWork" [inline]="false"></app-input>
                </div>
                <div class="form-group col-md-4">
                    <app-input [fGroup]="form" [controlProperties]="phoneCell" [inline]="false"></app-input>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Enregistrer</button>
        </form>
    `,
    styles: []
})
export class ContactComponent implements OnInit {

    @Input() parentForm: FormGroup;
    @Input() detailObservable: Observable<UserDetail>;
    @Output() saveEvent = new EventEmitter<any>();
    form: FormGroup;

    private get controlProperties() {
        return this.cpService.getControlPropertiesMap();
    }

    get phoneHome() {
        return this.controlProperties.get(ControlKey.CONTACT_PHONE_HOME);
    }

    get phoneWork() {
        return this.controlProperties.get(ControlKey.CONTACT_PHONE_WORK);
    }

    get phoneCell() {
        return this.controlProperties.get(ControlKey.CONTACT_PHONE_CELL);
    }

    constructor(private fb: FormBuilder, private cpService: ControlPropertiesService) {
    }

    ngOnInit(): void {
        this.form = this.createContactInfoFormGroup();

        this.detailObservable.subscribe(detail => {
            this.form.patchValue({
                [ControlKey.CONTACT_PHONE_HOME]: detail[ControlKey.GRP_CONTACT_INFO][ControlKey.CONTACT_PHONE_HOME],
                [ControlKey.CONTACT_PHONE_WORK]: detail[ControlKey.GRP_CONTACT_INFO][ControlKey.CONTACT_PHONE_WORK],
                [ControlKey.CONTACT_PHONE_CELL]: detail[ControlKey.GRP_CONTACT_INFO][ControlKey.CONTACT_PHONE_CELL],
            });
        });

        if (this.parentForm) {
            this.parentForm.addControl(ControlKey.GRP_CONTACT_INFO, this.form);
        }

    }

    private createContactInfoFormGroup() {
        return this.fb.group({
            [ControlKey.CONTACT_PHONE_HOME]: [],
            [ControlKey.CONTACT_PHONE_WORK]: [],
            [ControlKey.CONTACT_PHONE_CELL]: [],
        });
    }

    updateContact() {
        this.saveEvent.emit(this.form.value);
    }

}
