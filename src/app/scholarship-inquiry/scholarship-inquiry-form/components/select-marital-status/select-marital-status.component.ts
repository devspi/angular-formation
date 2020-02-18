import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {MaritalStatus} from '../../../../model/referential/marital-status';
import {MaritalStatusUtil} from '../../../../util/marital-status-util';

@Component({
    selector: 'app-select-marital-status',
    template: `
        <div class="col-sm" [formGroup]="formGroup">
            <div class="form-group row">
                <label class="col-sm-4 col-form-label">{{ statusLabel }}</label>
                <div class="col-sm-7">
                    <select class="form-control" formControlName="maritalStatus"
                            [class.is-invalid]="statusControl.invalid && statusControl.touched">
                        <option value="{{null}}">Status marital</option>
                        <option *ngFor="let status of maritalStatus">{{status}}</option>
                    </select>
                </div>
            </div>
            <div *ngIf="dateVisible" class="form-group row">
                <label class="col-sm-4 col-form-label">{{ dateLabel }}</label>
                <div class="col-sm-7">
                    <input type="date" class="form-control" formControlName="situationDate"
                           [class.is-invalid]="dateControl.invalid && dateControl.touched">
                </div>
            </div>
        </div>
    `,
    styles: []
})
export class SelectMaritalStatusComponent implements OnInit {

    @Input() formGroup: FormGroup;
    @Input() maritalStatus: Array<MaritalStatus>;

    public statusLabel = 'Status marital';
    public dateLabel = 'Date';

    public statusControl: AbstractControl;
    public dateVisible: boolean;
    public dateControl: AbstractControl;


    constructor() {
    }

    ngOnInit(): void {
        console.log(this.formGroup);
        this.statusControl = this.formGroup.get('maritalStatus');
        this.dateControl = this.formGroup.get('situationDate');

        this.statusControl.valueChanges.subscribe(val => {
            this.dateVisible = MaritalStatusUtil.isDateNeeded(val);
        });
    }

}
