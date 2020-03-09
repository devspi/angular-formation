import {Component, Input, OnInit} from '@angular/core';
import {ControlProperties} from '../../_services/control-properties.service';
import {AbstractControl} from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: '',
    template: '',
    styles: []
})
export class BaseControlComponent implements OnInit {

    @Input() controlProperties: ControlProperties;
    @Input() fGroup;
    @Input() inline = true;

    control: AbstractControl;

    constructor() {
    }

    ngOnInit(): void {
        this.control = this.fGroup.get(this.controlProperties.key);
        if (!this.control) {
            console.log('CONTROL DOESNT EXIST IN FORMGROUP FOR KEY : ' + this.controlProperties.key);
        }
    }
}
