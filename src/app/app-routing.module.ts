import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from '@app/_helpers/auth-guard';

const routes: Routes = [
    {path: '', component: WelcomePageComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'user',
        loadChildren: () => import(`./user-account/user-account.module`).then(m => m.UserAccountModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'simulator',
        loadChildren: () => import(`./simulator/simulator.module`).then(m => m.SimulatorModule)
    },
    {
        path: 'scholarship',
        loadChildren: () => import(`./scholarship-inquiry/scholarship-inquiry.module`).then(m => m.ScholarshipInquiryModule),
        canActivate: [AuthGuard]
    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}

export const routingComponents = [
    WelcomePageComponent,
    PageNotFoundComponent
];
