import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ControlKey} from '../../../_models/controlkey';
import {RowableComponent} from '../../../_components/rowable/rowable.component';
import {ControlPropertiesService} from '../../../_services/control-properties.service';
import {SimulationForm} from '../../../_models/simulation/simulationForm';

@Component({
    selector: 'app-no-scholarship-children-info',
    template: `
        <div class="form-group">
            <app-select [fGroup]="fGroup" [inline]="false"
                        [controlProperties]="nbrChildrenProp" [selectItems]="numbers"></app-select>
        </div>
        <app-array-container
                [fGroup]="fGroup"
                [controlArray]="rowFormArray"
                [fArrayName]="fArrayName"
                [childRowTemplate]="childRow">
        </app-array-container>

        <ng-template #childRow let-row="row" let-i="i">
            <h4>Enfant {{i + 1}}</h4>
            <div class="row">
                <div class="col form-group">
                    <app-input [fGroup]="row" [inline]="false" [controlProperties]="familyNameProp"></app-input>
                </div>
                <div class="col form-group">
                    <app-input [fGroup]="row" [inline]="false" [controlProperties]="firstNameProp"></app-input>
                </div>
                <div class="col form-group">
                    <app-select-scholar-level [fGroup]="row" [inline]="false"
                                              [controlProperties]="scholarLevelProp"></app-select-scholar-level>
                </div>
            </div>
        </ng-template>
    `,
    styles: []
})
export class NoScholarshipChildrenInfoComponent extends RowableComponent implements OnInit {

    public numbers = Array<number>(7).fill(null).map((x, i) => i + 1);

    @Input() fGroup;
    @Input() simulatorData: SimulationForm;
    fArrayName = ControlKey.CHILDREN;

    private get controlProperties() {
        return this.controlPropertiesService.getControlPropertiesMap();
    }

    get nbrChildrenProp() {
        return this.controlProperties.get(ControlKey.NBR_CHILDREN);
    }

    get firstNameProp() {
        return this.controlProperties.get(ControlKey.FIRSTNAME);
    }

    get familyNameProp() {
        return this.controlProperties.get(ControlKey.FAMILYNAME);
    }

    get scholarLevelProp() {
        return this.controlProperties.get(ControlKey.SCHOLAR_LEVEL);
    }

    constructor(private fb: FormBuilder, private controlPropertiesService: ControlPropertiesService) {
        super();
    }

    get nbrRowControl(): FormControl {
        return this.fGroup.get(ControlKey.NBR_CHILDREN);
    }

    get rowFormArray(): FormArray {
        return this.fGroup.get(ControlKey.CHILDREN) as FormArray;
    }

    ngOnInit(): void {
        super.ngOnInit();

        this.fGroup.patchValue({
            [ControlKey.NBR_CHILDREN]: this.simulatorData.nbrChildren,
            [ControlKey.CHILDREN]: this.simulatorData.children,
        });
    }

    buildRow(): FormGroup {
        return this.fb.group({
            [ControlKey.FAMILYNAME]: ['', Validators.required],
            [ControlKey.FIRSTNAME]: ['', Validators.required],
            [ControlKey.SCHOLAR_LEVEL]: ['', Validators.required]
        });
    }
}
