import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {DropzoneDirective} from '@app/_directives/dropzone.directive';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [DropzoneDirective],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        FontAwesomeModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        DropzoneDirective,
        FontAwesomeModule
    ]
})
export class CoreModule {
}
