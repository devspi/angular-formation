import {NgModule} from '@angular/core';
import {BaseControlComponent} from './base-control/base-control.component';
import {CheckboxListControlComponent} from './checkbox-list-control/checkbox-list-control.component';
import {InputControlComponent} from './input-control/input-control.component';
import {SelectControlComponent} from './select-control/select-control.component';
import {SelectOptionalContainerControlComponent} from './select-optionalcontainer-control/select-optional-container-control.component';
import {SelectScholarLevelComponent} from './select-scholar-level/select-scholar-level.component';
import {ArrayContainerComponent} from './array-container/array-container.component';
import {AlertComponent} from './alert/alert.component';
import {CoreModule} from '@app/_core/core.module';
import {UploaderComponent} from '@app/_components/uploader/uploader.component';


@NgModule({
    declarations: [BaseControlComponent,
        CheckboxListControlComponent,
        InputControlComponent,
        SelectControlComponent,
        SelectOptionalContainerControlComponent,
        SelectScholarLevelComponent,
        ArrayContainerComponent,
        AlertComponent,
        UploaderComponent],
    imports: [
        CoreModule,
    ],
    exports: [BaseControlComponent,
        CheckboxListControlComponent,
        InputControlComponent,
        SelectControlComponent,
        SelectOptionalContainerControlComponent,
        SelectScholarLevelComponent,
        ArrayContainerComponent,
        AlertComponent,
        UploaderComponent]
})
export class SharedComponentsModule {
}
