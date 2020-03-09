import {ControlKey} from '@app/_models/controlkey';


export class ChildInfo {
    [ControlKey.GENDER]: string;
    [ControlKey.FAMILYNAME]: string;
    [ControlKey.FIRSTNAME]: string;
    [ControlKey.DATE_OF_BIRTH]: string;
    [ControlKey.PRCT_HANDI]: string;
    [ControlKey.LAST_YEAR_SCHOLARLEVEL]: string;
    [ControlKey.NEXT_YEAR_SCHOLARLEVEL]: string;
    [ControlKey.NEXT_YEAR_SCHOOL]: string;
    [ControlKey.UNSCHOOLED]: string;
}

export class GeneralInfo {
    birthName: string;
    marriedName: string;
    firstName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    nationality: string;
    prctHandi: number;
}

export class FamilySituation {
    maritalStatus: string;
    situationDate: string;
}

export class ChildLink {
    link: string;
    precision: string;
}

export class ProSituation {
    situation: string;
    situationDate: string;
    employerName: string;
    job: string;
}

export class Income {
    monthlyPay: number;
    pension: number;
    liberalIncome: number;
    other: number;
}

export class SocialSecurity {
    organisms: Array<string>;
}

export class Applicant {
    generalInfo: GeneralInfo;
    familySituation: FamilySituation;
    childLink: ChildLink;
    proSituation: ProSituation;
    income: Income;
    socialSecurity: SocialSecurity;
}

export class Identity {
    applicant: Applicant;
    conjoint: Applicant;
}

export class ScholarshipInquiryDetails {
    inquiryId: number;
    identity: Identity;
    children: Array<ChildInfo>;
}
