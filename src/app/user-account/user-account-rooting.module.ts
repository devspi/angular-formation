import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from '@app/user-account/profile/user-profile.component';
import {UserScholarshipComponent} from '@app/user-account/scholarship/user-scholarship.component';
import {UserHomeComponent} from '@app/user-account/home/user-home.component';

const routes: Routes = [
    {path: 'profile', component: UserProfileComponent},
    {path: 'scholarship', component: UserScholarshipComponent},
    {path: 'home', component: UserHomeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UserAccountRootingModule {
}

export const routingComponents = [
    UserProfileComponent,
    UserScholarshipComponent,
    UserHomeComponent,
];
