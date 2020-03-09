import {ControlKey} from '@app/_models/controlkey';
import {UserAddress} from '@app/_models/user/user-address';
import {UserBank} from '@app/_models/user/user-bank';
import {UserContact} from '@app/_models/user/user-contact';

export class UserDetail {
    userId: number;
    [ControlKey.GRP_ADDRESS_INFO]: UserAddress;
    [ControlKey.GRP_BANK_INFO]: UserBank;
    [ControlKey.GRP_CONTACT_INFO]: UserContact;
}
