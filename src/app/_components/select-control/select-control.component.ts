import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseControlComponent} from '../base-control/base-control.component';

@Component({
    selector: 'app-select',
    template: `
        <ng-container *ngIf="inline; then inlineInput; else classicInput"></ng-container>

        <ng-template #inlineInput>
            <div class="form-group row" [formGroup]="fGroup">
                <label class="col-sm-4 col-form-label">{{ controlProperties.label }} :</label>
                <div class="col-sm-7">
                    <select class="form-control"
                            (change)="onValueChange($event)"
                            [formControlName]="controlProperties.key"
                            [class.is-invalid]="control.invalid && control.touched">
                        <option value="{{null}}">{{ controlProperties.label }}</option>
                        <option *ngFor="let item of selectItems" [ngValue]="item">{{item}}</option>
                    </select>
                    <div *ngIf="control.invalid && control.touched">
                        <small *ngIf="control.errors?.required" class="text-danger">Ce champ est obligatoire</small>
                    </div>
                </div>
            </div>
        </ng-template>

        <ng-template #classicInput>
            <div class="form-group" [formGroup]="fGroup">
                <label class="form-label">{{ controlProperties.label }}</label>
                <select class="form-control"
                        (change)="onValueChange($event)"
                        [formControlName]="controlProperties.key"
                        [class.is-invalid]="control.invalid && control.touched">
                    <option value="{{null}}">{{ controlProperties.label }}</option>
                    <option *ngFor="let item of selectItems" [ngValue]="item">{{item}}</option>
                </select>
                <div *ngIf="control.invalid && control.touched">
                    <small *ngIf="control.errors?.required" class="text-danger">Ce champ est obligatoire</small>
                </div>
            </div>
        </ng-template>
    `,
    styles: []
})
export class SelectControlComponent extends BaseControlComponent {

    @Input() selectItems;
    @Output() valueChange = new EventEmitter<any>();

    constructor() {
        super();
    }

    onValueChange(event) {
        this.valueChange.emit(event.target);
    }
}
