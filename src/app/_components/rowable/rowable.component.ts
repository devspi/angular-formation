import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
    template: '',
    styles: []
})
export abstract class RowableComponent implements OnInit {

    private nbrRow = 0;

    protected constructor() {
    }

    abstract buildRow(): FormGroup;

    abstract get nbrRowControl(): FormControl;

    abstract get rowFormArray(): FormArray;

    ngOnInit(): void {
        this.nbrRowControl.valueChanges.subscribe(val => {
            this.updateRowArray(val);
        });
    }

    private updateRowArray(nbr: number) {
        while (nbr < this.nbrRow) {
            this.rowFormArray.removeAt(this.rowFormArray.length - 1);
            this.nbrRow--;
        }
        while (this.nbrRow < nbr) {
            this.rowFormArray.push(this.buildRow());
            this.nbrRow++;
        }
    }
}
