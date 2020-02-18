import {SimulationChildForm} from './simulation-child-form';

export class SimulationForm {
    city: string;
    income: number;
    nbrHandi: number;
    nbrChildren: number;
    children: Array<SimulationChildForm>;
}
