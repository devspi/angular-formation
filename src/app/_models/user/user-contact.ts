import {ControlKey} from '@app/_models/controlkey';

export class UserContact {
    [ControlKey.CONTACT_PHONE_HOME]: string;
    [ControlKey.CONTACT_PHONE_CELL]: string;
    [ControlKey.CONTACT_PHONE_WORK]: string;
}
