import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SimulationService} from '../../services/simulation.service';

@Component({
    selector: 'app-simulator',
    templateUrl: './simulator-form.component.html',
    styleUrls: ['./simulator-form.component.scss']
})
export class SimulatorFormComponent implements OnInit {

    public numbers = Array(15).fill(null).map((x, i) => i + 1);
    public simulatorForm: FormGroup;

    constructor(private fb: FormBuilder, private simulationService: SimulationService, private router: Router) {
    }

    get city() {
        return this.simulatorForm.get('city');
    }

    get income() {
        return this.simulatorForm.get('income');
    }

    get nbrHandi() {
        return this.simulatorForm.get('nbrHandi');
    }

    get nbrChildren() {
        return this.simulatorForm.get('nbrChildren');
    }

    get children() {
        return this.simulatorForm.get('children') as FormArray;
    }

    ngOnInit(): void {
        this.simulatorForm = this.fb.group({
            city: ['', Validators.required],
            income: ['', Validators.required],
            nbrHandi: [],
            nbrChildren: [null, Validators.required],
            children: this.fb.array([]),
        });

        this.nbrChildren.valueChanges.subscribe(val => {
            this.children.clear();
            for (let i = 0; i < val; i++) {
                this.children.push(this.fb.group({
                    dateOfBirth: ['', Validators.required],
                    scholarLevel: ['', Validators.required]
                }));
            }
        });
    }

    onSubmit() {
        this.simulationService.sendSimulation(this.simulatorForm.value).subscribe(
            response => this.router.navigateByUrl('/simulator/result', {state: {response: response.data}}),
            error => console.error('Error'),
        );
    }
}
