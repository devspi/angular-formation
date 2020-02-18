import {Component, Input, OnInit} from '@angular/core';
import {ReferentialService} from '../../services/referential.service';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-select-scholar-level',
    template: `
        <div [formGroup]="formGroup">
            <label>Niveau Scolaire</label>
            <select class="form-control" formControlName="scholarLevel"
                    [class.is-invalid]="control.invalid && control.touched">
                <option value="{{null}}">Niveau scolaire</option>
                <option *ngFor="let scholarLevel of scholarLevels" [ngValue]="scholarLevel">{{scholarLevel}}</option>
            </select>
            <div *ngIf="control.invalid && control.touched">
                <small *ngIf="control.errors?.required" class="text-danger">
                    Veuillez indiquer le niveau scolaire
                </small>
            </div>
        </div>
    `,
    styles: []
})
export class SelectScholarLevelComponent implements OnInit {

    public scholarLevels = Array();
    public control: AbstractControl;
    @Input() formGroup: FormGroup;

    constructor(private referentialService: ReferentialService) {
    }

    ngOnInit(): void {
        this.control = this.formGroup.get('scholarLevel');

        this.referentialService.getScholarLevel().subscribe(
            response => {
                    for (const level of response.data) {
                        this.scholarLevels.push(level);
                    }
            },
            error => {
            },
        );
    }

}
