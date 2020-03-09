import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-array-container',
    template: `
        <div [formGroup]="fGroup">
            <div *ngFor="let item of controlArray.controls; let i = index" [formArrayName]="fArrayName">
                <ng-container [ngTemplateOutlet]="childRowTemplate" [ngTemplateOutletContext]="{row:item, i:i}"></ng-container>
            </div>
        </div>
    `,
    styles: []
})
export class ArrayContainerComponent implements OnInit {

    @Input() fGroup: FormGroup;
    @Input() fArrayName: string;
    @Input() controlArray: FormArray;
    @Input() childRowTemplate: TemplateRef<any>;

    constructor() {
    }

    ngOnInit(): void {
    }
}
