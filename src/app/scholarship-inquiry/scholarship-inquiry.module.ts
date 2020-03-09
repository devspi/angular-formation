import {NgModule} from '@angular/core';
import {SharedComponentsModule} from '../_components/shared-components.module';
import {ChildLinkComponent} from './scholarship-inquiry-form/child-link/child-link.component';
import {GeneralInfoComponent} from './scholarship-inquiry-form/general-info/general-info.component';
import {FamilySituationComponent} from './scholarship-inquiry-form/family-situation/family-situation.component';
import {ProfessionalSituationComponent} from './scholarship-inquiry-form/professional-situation/professional-situation.component';
import {IncomeComponent} from './scholarship-inquiry-form/income/income.component';
import {SocialSecurityComponent} from './scholarship-inquiry-form/socialsecurity/social-security.component';
import {ChildrenInfoComponent} from './scholarship-inquiry-form/children-info/children-info.component';
import {routingComponents, ScholarshipInquiryRoutingModule} from './scholarship-inquiry-rooting.module';
import {ChildrenRowComponent} from './scholarship-inquiry-form/children-info/child-row/children-row.component';
import {NoScholarshipChildrenInfoComponent} from './no-scholarship-certificate-form/children-info/no-scholarship-children-info.component';
import {CoreModule} from '@app/_core/core.module';
import {JustificativeAttachmentsComponent} from '@app/scholarship-inquiry/scholarship-inquiry-form/justificative-attachments/justificative-attachments.component';

@NgModule({
    declarations: [
        routingComponents,
        ChildLinkComponent,
        GeneralInfoComponent,
        FamilySituationComponent,
        ProfessionalSituationComponent,
        IncomeComponent,
        SocialSecurityComponent,
        ChildrenInfoComponent,
        NoScholarshipChildrenInfoComponent,
        ChildrenRowComponent,
        JustificativeAttachmentsComponent,
    ],
    imports: [
        CoreModule,
        SharedComponentsModule,
        ScholarshipInquiryRoutingModule,
    ],
    providers: [],
    exports: []
})
export class ScholarshipInquiryModule {
}
