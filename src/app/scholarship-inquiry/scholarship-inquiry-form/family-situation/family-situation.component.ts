import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ReferentialService} from '../../../services/referential.service';

@Component({
    selector: 'app-family-situation',
    template: `
        <h4>Situation familiale</h4>
        <div class="row">
            <div class="col-sm" [formGroup]="formGroupLeft">
                <app-select-marital-status [formGroup]="formGroupLeft" [maritalStatus]="maritalStatus"></app-select-marital-status>
            </div>
            <div class="col-sm" [formGroup]="formGroupRight">
                <app-select-marital-status [formGroup]="formGroupRight" [maritalStatus]="maritalStatus"></app-select-marital-status>
            </div>
        </div>
    `,
    styles: []
})
export class FamilySituationComponent implements OnInit {

    @Input() formGroupLeft: FormGroup;
    @Input() formGroupRight: FormGroup;
    public maritalStatus = Array();

    constructor(private referentialService: ReferentialService) {
    }

    ngOnInit(): void {
        this.referentialService.getMaritalStatus().subscribe(response => {
            for (const status of response.data) {
                this.maritalStatus.push(status);
            }
        });
    }
}
