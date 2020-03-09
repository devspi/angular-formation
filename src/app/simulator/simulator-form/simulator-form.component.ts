import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SimulationService} from '../../_services/simulation.service';
import {ControlKey} from '../../_models/controlkey';
import {ControlPropertiesService} from '../../_services/control-properties.service';
import {ReferentialService} from '../../_services/referential.service';
import {RowableComponent} from '../../_components/rowable/rowable.component';

@Component({
    selector: 'app-simulator',
    templateUrl: './simulator-form.component.html',
    styleUrls: ['./simulator-form.component.scss']
})
export class SimulatorFormComponent extends RowableComponent implements OnInit {

    public numbers = Array<number>(7).fill(null).map((x, i) => i + 1);
    public simulatorForm: FormGroup;
    public childrenInfoArrayName = ControlKey.CHILDREN;

    constructor(private referentialService: ReferentialService, private fb: FormBuilder, private simulationService: SimulationService, private router: Router, private controlPropertiesService: ControlPropertiesService) {
        super();
    }

    private get controlProperties() {
        return this.controlPropertiesService.getControlPropertiesMap();
    }

    get scholarLevelProp() {
        return this.controlProperties.get(ControlKey.SCHOLAR_LEVEL);
    }

    get dateOfBirthProp() {
        return this.controlProperties.get(ControlKey.DATE_OF_BIRTH);
    }

    get cityProp() {
        return this.controlProperties.get(ControlKey.ADDRESS_CITY);
    }

    get incomeProp() {
        return this.controlProperties.get(ControlKey.INCOME);
    }

    get nbrHandiProp() {
        return this.controlProperties.get(ControlKey.NBR_HANDI);
    }

    get nbrChildrenProp() {
        return this.controlProperties.get(ControlKey.NBR_CHILDREN);
    }

    get rowFormArray(): FormArray {
        return this.simulatorForm.get(ControlKey.CHILDREN) as FormArray;
    }

    get nbrRowControl(): FormControl {
        return this.simulatorForm.get(ControlKey.NBR_CHILDREN) as FormControl;
    }

    buildRow(): FormGroup {
        return this.fb.group({
            [ControlKey.DATE_OF_BIRTH]: ['', Validators.required],
            [ControlKey.SCHOLAR_LEVEL]: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.simulatorForm = this.fb.group({
            [ControlKey.ADDRESS_CITY]: ['', Validators.required],
            [ControlKey.GRP_INCOME]: ['', Validators.required],
            [ControlKey.NBR_HANDI]: [],
            [ControlKey.NBR_CHILDREN]: [null, Validators.required],
            [ControlKey.CHILDREN]: this.fb.array([]),
        });
        super.ngOnInit();
    }

    onSubmit() {
        this.simulationService.sendSimulation(this.simulatorForm.value).subscribe(
            response => this.router.navigateByUrl('/simulator/result', {state: {response: response.data}}),
            error => console.error('Error'),
        );
    }
}
