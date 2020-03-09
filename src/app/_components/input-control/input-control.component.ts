import {Component} from '@angular/core';
import {BaseControlComponent} from '../base-control/base-control.component';

@Component({
    selector: 'app-input',
    template: `
        <ng-container *ngIf="inline; then inlineInput; else classicInput"></ng-container>

        <ng-template #inlineInput>
            <div class="form-group row" [formGroup]="fGroup">
                <label class="col-sm-4 col-form-label">{{ controlProperties.label }} :</label>
                <div class="col-sm-7">
                    <input class="form-control"
                           [type]="controlProperties.type"
                           [formControlName]="controlProperties.key"
                           [class.is-invalid]="control.invalid && control.touched"/>
                </div>
            </div>
        </ng-template>

        <ng-template #classicInput>
            <div class="form-group" [formGroup]="fGroup">
                <label class="form-label">{{ controlProperties.label }}</label>
                <input class="form-control"
                       [type]="controlProperties.type"
                       [formControlName]="controlProperties.key"
                       [class.is-invalid]="control.invalid && control.touched"/>
                <div *ngIf="control.invalid && control.touched">
                    <small *ngIf="control.errors?.required" class="text-danger">Ce champ est obligatoire</small>
                </div>
            </div>
        </ng-template>


    `,
    styles: []
})
export class InputControlComponent extends BaseControlComponent {

    constructor() {
        super();
    }
}
