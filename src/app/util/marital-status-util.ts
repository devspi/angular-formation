import {MaritalStatus} from '../model/referential/marital-status';

export class MaritalStatusUtil {

    public static isDateNeeded(status) {
        return status === MaritalStatus.MARIE_PACSE
            || status === MaritalStatus.DIVORCE
            || status === MaritalStatus.VEUF
            || status === MaritalStatus.SEPARE;
    }
}
