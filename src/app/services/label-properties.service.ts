import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LabelPropertiesService {

    scholarshipInquiryIdentityLabelMap = new Map();

    constructor() {
        const generalInfoMap = new Map<string, string>();
        generalInfoMap.set('birthName', 'Nom de naissance');
        generalInfoMap.set('marriedName', 'Nom marital');
        generalInfoMap.set('firstName', 'Prénoms');
        generalInfoMap.set('dateOfBirth', 'Date de naissance');
        generalInfoMap.set('placeOfBirth', 'Lieu de naissance');
        generalInfoMap.set('nationality', 'Nationalité');
        generalInfoMap.set('prctHandi', 'Handicap (% taux)');

        const familySituationMap = new Map<string, string>();
        familySituationMap.set('situation', 'Prénoms');
        familySituationMap.set('situationDate', 'Prénoms');

        const childLinkMap = new Map<string, string>();
        childLinkMap.set('link', 'Prénoms');
        childLinkMap.set('comment', 'Prénoms');

        const proSituationMap = new Map<string, string>();
        proSituationMap.set('situation', 'Prénoms');
        proSituationMap.set('date', 'Prénoms');
        proSituationMap.set('job', 'Prénoms');
        proSituationMap.set('employerName', 'Prénoms');

        const incomeMap = new Map<string, string>();
        incomeMap.set('monthlyPay', 'Prénoms');
        incomeMap.set('pension', 'Prénoms');
        incomeMap.set('liberalIncome', 'Prénoms');
        incomeMap.set('other', 'Prénoms');

        const socialSecuMap = new Map<string, string>();
        socialSecuMap.set('organisms', 'Prénoms');


        this.scholarshipInquiryIdentityLabelMap.set('generalInfo', generalInfoMap);
        this.scholarshipInquiryIdentityLabelMap.set('familySituation', familySituationMap);
        this.scholarshipInquiryIdentityLabelMap.set('childLink', childLinkMap);
        this.scholarshipInquiryIdentityLabelMap.set('proSituation', proSituationMap);
        this.scholarshipInquiryIdentityLabelMap.set('income', incomeMap);
        this.scholarshipInquiryIdentityLabelMap.set('socialSecurity', socialSecuMap);
    }

    getScholarshipInquiryIdentityLabelMap(sectionName): Map<string, string> {
        return this.scholarshipInquiryIdentityLabelMap.get(sectionName);
    }
}
