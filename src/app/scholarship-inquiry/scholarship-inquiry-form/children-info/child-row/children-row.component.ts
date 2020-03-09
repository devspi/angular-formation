import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ControlPropertiesService} from '../../../../_services/control-properties.service';
import {ControlKey} from '../../../../_models/controlkey';

@Component({
    selector: 'app-child-row',
    template: `
        <h4>Enfant {{index + 1}}</h4>
        <div class="form-row">
            <div class="col form-group">
                <app-input [controlProperties]="familyNameProp" [inline]="false" [fGroup]="row"></app-input>
            </div>
            <div class="col form-group">
                <app-input [controlProperties]="firstNameProp" [inline]="false" [fGroup]="row"></app-input>
            </div>
            <div class="col form-group">
                <app-input [controlProperties]="dateOfBirthProp" [inline]="false" [fGroup]="row"></app-input>
            </div>
            <div class="col form-group">
                <app-input [controlProperties]="prctHandiProp" [inline]="false" [fGroup]="row"></app-input>
            </div>
        </div>
        <div class="form-row">
            <h5>Prévions pour l'année prochaine</h5>
        </div>
        <div class="form-row">
            <div class="col form-group">
                <app-select-scholar-level [controlProperties]="scholarLevelProp" [inline]="false"
                                          [fGroup]="row"></app-select-scholar-level>
            </div>
            <div class="col form-group">
                <app-input [controlProperties]="nextSchoolProp" [inline]="false" [fGroup]="row"></app-input>
            </div>
            <div class="col form-group">
                <app-select-scholar-level [controlProperties]="nextScholarLevelProp" [inline]="false"
                                          [fGroup]="row"></app-select-scholar-level>
            </div>
            <div class="col form-group">
                <app-input [controlProperties]="unschooledProp" [inline]="true" [fGroup]="row"></app-input>
            </div>
        </div>
    `,
    styles: []
})
export class ChildrenRowComponent implements OnInit {

    @Input() row: FormGroup;
    @Input() index: number;

    private get controlProperties() {
        return this.cpService.getControlPropertiesMap();
    }

    get familyNameProp() {
        return this.controlProperties.get(ControlKey.FAMILYNAME);
    }

    get firstNameProp() {
        return this.controlProperties.get(ControlKey.FIRSTNAME);
    }

    get dateOfBirthProp() {
        return this.controlProperties.get(ControlKey.DATE_OF_BIRTH);
    }

    get genderProp() {
        return this.controlProperties.get(ControlKey.GENDER);
    }

    get prctHandiProp() {
        return this.controlProperties.get(ControlKey.PRCT_HANDI);
    }

    get scholarLevelProp() {
        return this.controlProperties.get(ControlKey.LAST_YEAR_SCHOLARLEVEL);
    }

    get nextScholarLevelProp() {
        return this.controlProperties.get(ControlKey.NEXT_YEAR_SCHOLARLEVEL);
    }

    get nextSchoolProp() {
        return this.controlProperties.get(ControlKey.NEXT_YEAR_SCHOOL);
    }

    get unschooledProp() {
        return this.controlProperties.get(ControlKey.UNSCHOOLED);
    }

    constructor(private cpService: ControlPropertiesService) {
    }

    ngOnInit(): void {
    }
}
