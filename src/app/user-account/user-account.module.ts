import {NgModule} from '@angular/core';
import {routingComponents, UserAccountRootingModule} from '@app/user-account/user-account-rooting.module';
import {AddressComponent} from '@app/user-account/profile/address/address.component';
import {ContactComponent} from '@app/user-account/profile/contact/contact.component';
import {SharedComponentsModule} from '@app/_components/shared-components.module';
import {CoreModule} from '@app/_core/core.module';
import {BankComponent} from '@app/user-account/profile/bank/bank.component';
import {InquiriesComponent} from './scholarship/inquiries/inquiries.component';

@NgModule({
    declarations: [
        routingComponents,
        AddressComponent,
        ContactComponent,
        BankComponent,
        InquiriesComponent,
    ],
    imports: [
        CoreModule,
        SharedComponentsModule,
        UserAccountRootingModule,
    ],
    providers: [],
    exports: []
})
export class UserAccountModule {
}
