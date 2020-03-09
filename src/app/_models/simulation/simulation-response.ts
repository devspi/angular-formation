import {SimulationForm} from './simulationForm';

export interface SimulationResponse {
    message: string;
    scholarshipOK: boolean;
    form: SimulationForm;
}
