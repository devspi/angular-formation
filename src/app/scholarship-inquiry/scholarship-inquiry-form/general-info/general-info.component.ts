import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LabelPropertiesService} from '../../../services/label-properties.service';

@Component({
    selector: 'app-scholarship-inquiry-general-info',
    template: `
        <h1>Identité</h1>

        <div *ngFor="let entry of getKeyLabelMap() | keyvalue" class="row">
            <div class="col-sm">
                <app-inline-input-text [formGroup]="formGroupLeft" [controlKey]="entry.key"
                                       [label]="entry.value"></app-inline-input-text>
            </div>
            <div class="col-sm">
                <app-inline-input-text [formGroup]="formGroupRight" [controlKey]="entry.key"
                                       [label]="entry.value"></app-inline-input-text>
            </div>
        </div>
    `,
    styles: []
})
export class GeneralInfoComponent implements OnInit {
    @Input() formGroupLeft: FormGroup;
    @Input() formGroupRight: FormGroup;

    constructor(private labelPropertiesService: LabelPropertiesService) {
    }

    ngOnInit(): void {
    }

    getKeyLabelMap(): Map<string, string> {
        return this.labelPropertiesService.getScholarshipInquiryIdentityLabelMap('generalInfo');
    }

}
