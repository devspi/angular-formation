import {Component, Input, OnInit} from '@angular/core';
import {ControlKey} from '../../../_models/controlkey';
import {ReferentialService} from '../../../_services/referential.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CheckBoxItem} from '../../../_components/checkbox-list-control/checkbox-list-control.component';

@Component({
    selector: 'app-socialsecurity',
    template: `
        <h4>Couverture sociale (en cours de validité)</h4>
        <div class="row">
            <div class="col-sm">
                <app-checkbox-list
                        [form]="formLeft"
                        [options]="socialSecurityOrganisms"
                        (toggle)="onOrgaChange($event)">
                </app-checkbox-list>
            </div>
            <div class="col-sm">
                <app-checkbox-list
                        [form]="formRight"
                        [options]="socialSecurityOrganisms"
                        (toggle)="onOrgaChange($event)">
                </app-checkbox-list>
            </div>
        </div>
    `,
    styles: [],
})
export class SocialSecurityComponent implements OnInit {

    @Input() parentFormLeft: FormGroup;
    @Input() parentFormRight: FormGroup;

    formLeft: FormGroup;
    formRight: FormGroup;

    public socialSecurityOrganisms = Array<CheckBoxItem>();

    constructor(private fb: FormBuilder, private referentialService: ReferentialService) {
        this.formRight = this.createSocialSecuritySubGroup();
        this.formLeft = this.createSocialSecuritySubGroup();
    }

    ngOnInit(): void {
        this.referentialService.getSocialSecurityOrganisms().subscribe(response => {
            for (const data of response.data) {
                this.socialSecurityOrganisms.push(new CheckBoxItem(data, data, false));
            }
        });

        if (this.parentFormLeft) {
            this.parentFormLeft.registerControl(ControlKey.GRP_SOCIAL_SECURITY, this.formLeft);
        }
        if (this.parentFormRight) {
            this.parentFormRight.registerControl(ControlKey.GRP_SOCIAL_SECURITY, this.formRight);
        }
    }

    onOrgaChange(event) {
        console.log(event);
        const checkbox = event.checkBoxEvent.target;
        const formArray = (event.form.get(ControlKey.SOCIAL_SECURITY_ORGA) as FormArray);

        if (checkbox.checked) {
            formArray.push(new FormControl(checkbox.value));
        } else {
            formArray.removeAt(formArray.controls.findIndex(ctrl => ctrl.value === checkbox.value));
        }
    }

    private createSocialSecuritySubGroup(): FormGroup {
        return this.fb.group({
            [ControlKey.SOCIAL_SECURITY_ORGA]: this.fb.array([]),
        });
    }
}
