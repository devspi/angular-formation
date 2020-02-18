import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-inquiry-form-component',
    template: '',
    styles: []
})
export class InquiryFormComponent implements OnInit {

    @Input() controlKey: string;
    @Input() label: string;
    @Input() formGroup: FormGroup;

    control: AbstractControl;

    constructor() {
    }

    ngOnInit(): void {
        this.control = this.formGroup.get(this.controlKey);
    }
}

