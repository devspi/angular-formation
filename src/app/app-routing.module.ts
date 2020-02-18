import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {SimulatorFormComponent} from './simulator/simulator-form/simulator-form.component';
import {SimulationResultComponent} from './simulator/simulation-result/simulation-result.component';
import {SimulatorResponseGuard} from './simulator/simulator-response-guard.service';
import {ScholarshipInquiryFormComponent} from './scholarship-inquiry/scholarship-inquiry-form/scholarship-inquiry-form.component';
import {NoScholarshipCertificateFormComponent} from './scholarship-inquiry/no-scholarship-certificate-form/no-scholarship-certificate-form.component';

const routes: Routes = [
    {path: '', component: WelcomePageComponent},
    {path: 'simulator', component: SimulatorFormComponent},
    {path: 'simulator/result', component: SimulationResultComponent, canActivate: [SimulatorResponseGuard]},
    {path: 'scholarship/inquiry', component: ScholarshipInquiryFormComponent},
    {path: 'noscholarship-certificate', component: NoScholarshipCertificateFormComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [SimulatorResponseGuard]
})
export class AppRoutingModule {
}

export const routingComponents = [
    WelcomePageComponent,
    SimulatorFormComponent,
    SimulationResultComponent,
    ScholarshipInquiryFormComponent,
    NoScholarshipCertificateFormComponent,
    PageNotFoundComponent
];
