import {Component} from '@angular/core';
import {InquiryFormComponent} from '../inquiry-form-component/inquiry-form.component';

@Component({
    selector: 'app-inline-input-text',
    template: `
        <div class="form-group row" [formGroup]="formGroup">
            <label class="col-sm-4 col-form-label">{{ label }}</label>
            <div class="col-sm-7">
                <input type="text" class="form-control" formControlName="{{ controlKey }}"
                       [class.is-invalid]="control.invalid && control.touched">
            </div>
        </div>
    `,
    styles: []
})
export class InlineInputTextComponent extends InquiryFormComponent {

    constructor() {
        super();
    }
}
