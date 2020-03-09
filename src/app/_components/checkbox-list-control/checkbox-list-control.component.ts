import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-checkbox-list',
    template: `
        <div [formGroup]="form">
            <div *ngIf="true">
                <div class="form-check form-check-inline" *ngFor="let option of options; index as i">
                    <input class="form-check-input" type="checkbox"
                           (change)="onToggle($event)"
                           [checked]="option.checked"
                           [value]="option.value">
                    <label class="form-check-label">{{ option.label }}</label>
                </div>
            </div>
        </div>
    `,
    styles: []
})
export class CheckboxListControlComponent implements OnInit {

    @Input() options: Array<CheckBoxItem>;
    @Input() form: FormGroup;

    @Output() toggle = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onToggle(event) {
        this.toggle.emit({checkBoxEvent: event, form: this.form});
    }
}

export class CheckBoxItem {
    value: string;
    label: string;
    checked: boolean;

    constructor(value: any, label: any, checked?: boolean) {
        this.value = value;
        this.label = label;
        this.checked = checked ? checked : false;
    }
}
