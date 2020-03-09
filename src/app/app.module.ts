import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {SimulatorModule} from './simulator/simulator.module';
import {ScholarshipInquiryModule} from './scholarship-inquiry/scholarship-inquiry.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {LoginComponent} from './login/login.component';
import {SharedComponentsModule} from './_components/shared-components.module';
import {UserAccountModule} from '@app/user-account/user-account.module';
import {CoreModule} from '@app/_core/core.module';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        NavBarComponent,
        LoginComponent,
    ],
    imports: [
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        SimulatorModule,
        ScholarshipInquiryModule,
        UserAccountModule,
        SharedComponentsModule,
    ],
    providers: [],
    exports: [
        NavBarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
