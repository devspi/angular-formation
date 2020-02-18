import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectScholarLevelComponent} from '../components/select-scholar-level/select-scholar-level.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [SelectScholarLevelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
    exports: [SelectScholarLevelComponent]
})
export class ReferentialModule {
}
