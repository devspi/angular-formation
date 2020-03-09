import {MaritalStatus} from '../_models/referential/marital-status';
import {ChildLink} from '../_models/referential/child-link';
import {ProfessionalStatus} from '../_models/referential/professional-status';

export class ReferentialUtil {

    public static isDateNeededForMaritalStatus(status): boolean {
        return status === MaritalStatus.MARIE_PACSE
            || status === MaritalStatus.DIVORCE
            || status === MaritalStatus.VEUF
            || status === MaritalStatus.SEPARE;
    }

    public static isDateNeededForProStatus(status): boolean {
        return status === ProfessionalStatus.RETRAITE
            || status === ProfessionalStatus.CHOMEUR
            || status === ProfessionalStatus.INCARCERE;
    }

    public static isPrecisionNeededForChildLink(status): boolean {
        return status === ChildLink.AUTRE;
    }
}
