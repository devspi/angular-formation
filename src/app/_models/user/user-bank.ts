import {ControlKey} from '@app/_models/controlkey';

export class UserBank {
    [ControlKey.BANK_NAME]: string;
    [ControlKey.BANK_RIB_KEY]: string;
    [ControlKey.BANK_ACCOUNT_NBR]: string;
    [ControlKey.BANK_CODE_GUICHET]: string;
    [ControlKey.BANK_CODE]: string;
    [ControlKey.BANK_BIC]: string;
    [ControlKey.BANK_IBAN]: string;
    [ControlKey.BANK_ADDRESS]: string;
}
