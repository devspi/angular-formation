import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {ControlProperties} from '../../_services/control-properties.service';

@Component({
    selector: 'app-select-optional-container',
    template: `
        <div class="col-sm">
            <app-select [controlProperties]="controlProperties"
                        [fGroup]="formGroup"
                        [selectItems]="selectItems">
            </app-select>
            <div *ngIf="optionalVisible">
                <ng-container [ngTemplateOutlet]="optionalTemplate"></ng-container>
            </div>
        </div>
    `,
    styles: []
})
export class SelectOptionalContainerControlComponent implements OnInit {

    @Input() formGroup: FormGroup;
    @Input() selectItems: Array<any>;
    @Input() controlProperties: ControlProperties;
    @Input() optionalTemplate: TemplateRef<any>;

    @Output() valueChange = new EventEmitter<any>();

    public optionalVisible = false;
    public selectControl: AbstractControl;

    constructor() {
    }

    ngOnInit(): void {
        this.selectControl = this.formGroup.get(this.controlProperties.key);

        this.selectControl.valueChanges.subscribe(val => {
            this.valueChange.emit({selectedItem: val, source: this});
        });
    }
}
