import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SimulatorFormComponent} from './simulator-form/simulator-form.component';
import {SimulationResultComponent} from './simulation-result/simulation-result.component';
import {SimulatorResponseGuard} from './simulator-response-guard.service';

const simulatorRoutes: Routes = [
    {path: '', component: SimulatorFormComponent},
    {path: 'result', component: SimulationResultComponent, canActivate: [SimulatorResponseGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(simulatorRoutes)],
    exports: [RouterModule],
    providers: [SimulatorResponseGuard]
})
export class SimulatorRoutingModule {
}

export const routingComponents = [
    SimulatorFormComponent,
    SimulationResultComponent,
];
