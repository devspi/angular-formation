import {Component, Input, OnInit} from '@angular/core';
import {ReferentialService} from '../../_services/referential.service';

@Component({
    selector: 'app-select-scholar-level',
    template: `
        <app-select [selectItems]="selectItems" [controlProperties]="controlProperties" [inline]="inline" [fGroup]="fGroup"></app-select>`,
    styles: []
})
export class SelectScholarLevelComponent implements OnInit {

    @Input() controlProperties;
    @Input() inline;
    @Input() fGroup;

    public selectItems = new Array();

    constructor(private referentialService: ReferentialService) {
    }

    ngOnInit(): void {
        this.referentialService.getScholarLevel().subscribe(
            response => {
                for (const level of response.data) {
                    this.selectItems.push(level);
                }
            },
            error => {
            },
        );
    }
}
