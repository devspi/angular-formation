export class ScholarshipInquiry {
    id: number;
    dateOfDemand: string;
    status: ScholarshipInquiryStatus;
    message: string;
}

export enum ScholarshipInquiryStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    MISSING_DOCUMENT = 'MISSING_DOCUMENT',
    ACCEPTED = 'ACCEPTED',
    DECLINED = 'DECLINED'
}
