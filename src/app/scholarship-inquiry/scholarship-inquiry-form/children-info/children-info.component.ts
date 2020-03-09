import {Component, Input, OnInit} from '@angular/core';
import {ControlPropertiesService} from '../../../_services/control-properties.service';
import {ControlKey} from '../../../_models/controlkey';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RowableComponent} from '../../../_components/rowable/rowable.component';

@Component({
    selector: 'app-children-info',
    template: `
        <div [formGroup]="formGroup">
            <h4>Enfants à charge (mineurs et majeurs, scolarisé, en voie de scolarisation, étudiants)</h4>
            <app-select
                    [fGroup]="formGroup"
                    [inline]="true"
                    [selectItems]="numbers"
                    [controlProperties]="nbrChildrenProp"></app-select>

            <app-array-container [fGroup]="formGroup" [childRowTemplate]="childRowTemplate"
                                 [fArrayName]="fArrayName"
                                 [controlArray]="rowFormArray">
            </app-array-container>
        </div>

        <ng-template #childRowTemplate let-row="row" let-i="i">
            <app-child-row [index]="i" [row]="row"></app-child-row>
        </ng-template>
    `,
    styles: []
})
export class ChildrenInfoComponent extends RowableComponent implements OnInit {

    public numbers = Array(7).fill(null).map((x, i) => i + 1);

    @Input() parentForm;
    public formGroup;
    public fArrayName = ControlKey.CHILDREN;


    private get controlProperties() {
        return this.cpService.getControlPropertiesMap();
    }

    get nbrChildrenProp() {
        return this.controlProperties.get(ControlKey.NBR_CHILDREN);
    }

    constructor(private fb: FormBuilder, private cpService: ControlPropertiesService) {
        super();
    }

    ngOnInit(): void {
        this.formGroup = this.createChildrenFormGroup();
        if (this.parentForm) {
            this.parentForm.registerControl(ControlKey.GRP_CHILDREN_INFO, this.formGroup);
        }
        super.ngOnInit();
    }

    get rowFormArray() {
        return this.formGroup.get(ControlKey.CHILDREN) as FormArray;
    }

    get nbrRowControl(): FormControl {
        return this.formGroup.get(ControlKey.NBR_CHILDREN);
    }

    buildRow(): FormGroup {
        return this.fb.group({
            [ControlKey.FAMILYNAME]: ['', Validators.required],
            [ControlKey.FIRSTNAME]: ['', Validators.required],
            [ControlKey.DATE_OF_BIRTH]: ['', Validators.required],
            [ControlKey.GENDER]: ['', Validators.required],
            [ControlKey.PRCT_HANDI]: ['', Validators.required],
            [ControlKey.LAST_YEAR_SCHOLARLEVEL]: ['', Validators.required],
            [ControlKey.NEXT_YEAR_SCHOLARLEVEL]: ['', Validators.required],
            [ControlKey.NEXT_YEAR_SCHOOL]: ['', Validators.required],
            [ControlKey.UNSCHOOLED]: ['', Validators.required],
        });
    }

    private createChildrenFormGroup() {
        return this.fb.group({
            [ControlKey.NBR_CHILDREN]: ['', Validators.required],
            [ControlKey.CHILDREN]: this.fb.array([])
        });
    }
}
