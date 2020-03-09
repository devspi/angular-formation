import {ControlKey} from '@app/_models/controlkey';

export class LoggedUser {
    id: number;
    token: string;
    [ControlKey.AUTH_PASSWORD]: string;
    [ControlKey.AUTH_EMAIL]: string;
    [ControlKey.FIRSTNAME]: string;
    [ControlKey.FAMILYNAME]: string;

    constructor() {
    }

}
