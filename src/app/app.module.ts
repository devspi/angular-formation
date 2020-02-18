import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReferentialModule} from './referential/referential.module';
import {SelectMaritalStatusComponent} from './scholarship-inquiry/scholarship-inquiry-form/components/select-marital-status/select-marital-status.component';
import {GeneralInfoComponent} from './scholarship-inquiry/scholarship-inquiry-form/general-info/general-info.component';
import {InquiryFormComponent} from './scholarship-inquiry/scholarship-inquiry-form/components/inquiry-form-component/inquiry-form.component';
import {InlineInputTextComponent} from './scholarship-inquiry/scholarship-inquiry-form/components/inline-input-text/inline-input-text.component';
import { FamilySituationComponent } from './scholarship-inquiry/scholarship-inquiry-form/family-situation/family-situation.component';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        SelectMaritalStatusComponent,
        GeneralInfoComponent,
        InquiryFormComponent,
        InlineInputTextComponent,
        FamilySituationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ReferentialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
