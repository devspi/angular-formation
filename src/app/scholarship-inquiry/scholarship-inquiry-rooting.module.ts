import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScholarshipInquiryFormComponent} from './scholarship-inquiry-form/scholarship-inquiry-form.component';
import {NoScholarshipCertificateFormComponent} from './no-scholarship-certificate-form/no-scholarship-certificate-form.component';

const routes: Routes = [
    {path: 'inquiry', component: ScholarshipInquiryFormComponent},
    {path: 'noscholarship-certificate', component: NoScholarshipCertificateFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ScholarshipInquiryRoutingModule {
}

export const routingComponents = [
    ScholarshipInquiryFormComponent,
    NoScholarshipCertificateFormComponent,
];
