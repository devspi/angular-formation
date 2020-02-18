import {SimulationResponse} from './simulation-response';

describe('SimulationReponse', () => {
    it('should create an instance', () => {
        expect(new SimulationResponse('ok', true)).toBeTruthy();
    });
});
