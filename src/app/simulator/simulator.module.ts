import {NgModule} from '@angular/core';
import {SharedComponentsModule} from '../_components/shared-components.module';
import {routingComponents, SimulatorRoutingModule} from './simulator-routing.module';
import {CoreModule} from '@app/_core/core.module';

@NgModule({
    declarations: [
        routingComponents
    ],
    imports: [
        CoreModule,
        SharedComponentsModule,
        SimulatorRoutingModule,
    ],
    providers: [],
})
export class SimulatorModule {
}
