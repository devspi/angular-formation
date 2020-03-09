import {Injectable} from '@angular/core';
import {ControlKey} from '../_models/controlkey';

@Injectable({
    providedIn: 'root'
})
export class ControlPropertiesService {

    controlPropertiesMap = new Map();

    constructor() {

        this.controlPropertiesMap.set(ControlKey.BANK_NAME, new ControlProperties(ControlKey.BANK_NAME, 'Nom de la banque', 'text'));
        this.controlPropertiesMap.set(ControlKey.BANK_IBAN, new ControlProperties(ControlKey.BANK_IBAN, 'Code IBAN', 'text'));
        this.controlPropertiesMap.set(ControlKey.BANK_BIC, new ControlProperties(ControlKey.BANK_BIC, 'Code BIC', 'text'));
        this.controlPropertiesMap.set(ControlKey.BANK_CODE, new ControlProperties(ControlKey.BANK_CODE, 'Code banque', 'text'));
        this.controlPropertiesMap.set(ControlKey.BANK_CODE_GUICHET, new ControlProperties(ControlKey.BANK_CODE_GUICHET, 'Code guichet', 'text'));
        this.controlPropertiesMap.set(ControlKey.BANK_ACCOUNT_NBR, new ControlProperties(ControlKey.BANK_ACCOUNT_NBR, 'N° de compte', 'text'));
        this.controlPropertiesMap.set(ControlKey.BANK_RIB_KEY, new ControlProperties(ControlKey.BANK_RIB_KEY, 'Clé rib', 'text'));
        this.controlPropertiesMap.set(ControlKey.BANK_ADDRESS, new ControlProperties(ControlKey.BANK_ADDRESS, 'Domiciliation', 'text'));

        this.controlPropertiesMap.set(ControlKey.AUTH_EMAIL, new ControlProperties(ControlKey.AUTH_EMAIL, 'Nom d\'utilisateur (e-mail)', 'email'));
        this.controlPropertiesMap.set(ControlKey.AUTH_PASSWORD, new ControlProperties(ControlKey.AUTH_PASSWORD, 'Mot de passe', 'password'));

        this.controlPropertiesMap.set(ControlKey.NBR_CHILDREN, new ControlProperties(ControlKey.NBR_CHILDREN, 'Nombre d\'enfants', 'list'));
        this.controlPropertiesMap.set(ControlKey.FIRSTNAME, new ControlProperties(ControlKey.FIRSTNAME, 'Prénom', 'text'));
        this.controlPropertiesMap.set(ControlKey.FAMILYNAME, new ControlProperties(ControlKey.FAMILYNAME, 'Nom', 'text'));
        this.controlPropertiesMap.set(ControlKey.DATE_OF_BIRTH, new ControlProperties(ControlKey.DATE_OF_BIRTH, 'Date de naissance', 'date'));
        this.controlPropertiesMap.set(ControlKey.GENDER, new ControlProperties(ControlKey.GENDER, 'Genre', 'text'));
        this.controlPropertiesMap.set(ControlKey.BIRTHNAME, new ControlProperties(ControlKey.BIRTHNAME, 'Nom de naissance', 'text'));
        this.controlPropertiesMap.set(ControlKey.MARRIEDNAME, new ControlProperties(ControlKey.MARRIEDNAME, 'Nom marital', 'text'));
        this.controlPropertiesMap.set(ControlKey.PLACE_OF_BIRTH, new ControlProperties(ControlKey.PLACE_OF_BIRTH, 'Lieu de naissance', 'text'));
        this.controlPropertiesMap.set(ControlKey.NATIONALITY, new ControlProperties(ControlKey.NATIONALITY, 'Nationalité', 'text'));
        this.controlPropertiesMap.set(ControlKey.PRCT_HANDI, new ControlProperties(ControlKey.PRCT_HANDI, 'Handicap (% taux)', 'number'));
        this.controlPropertiesMap.set(ControlKey.NBR_HANDI, new ControlProperties(ControlKey.NBR_HANDI, 'Nombre de personnes handicapées au sein du foyer', 'number'));

        this.controlPropertiesMap.set(ControlKey.SCHOLAR_LEVEL, new ControlProperties(ControlKey.SCHOLAR_LEVEL, 'Niveau scolaire', 'list'));
        this.controlPropertiesMap.set(ControlKey.LAST_YEAR_SCHOLARLEVEL, new ControlProperties(ControlKey.LAST_YEAR_SCHOLARLEVEL, 'Classe de l\'année dernière', 'list'));
        this.controlPropertiesMap.set(ControlKey.NEXT_YEAR_SCHOLARLEVEL, new ControlProperties(ControlKey.NEXT_YEAR_SCHOLARLEVEL, 'Niveau scolaire', 'list'));
        this.controlPropertiesMap.set(ControlKey.NEXT_YEAR_SCHOOL, new ControlProperties(ControlKey.NEXT_YEAR_SCHOOL, 'Ecole', 'text'));
        this.controlPropertiesMap.set(ControlKey.UNSCHOOLED, new ControlProperties(ControlKey.UNSCHOOLED, 'Non scolarisé', 'radio'));

        this.controlPropertiesMap.set(ControlKey.ADDRESS_AT, new ControlProperties(ControlKey.ADDRESS_AT, 'Chez', 'text'));
        this.controlPropertiesMap.set(ControlKey.ADDRESS_APPT_NBR, new ControlProperties(ControlKey.ADDRESS_APPT_NBR, 'Appartement n°', 'text'));
        this.controlPropertiesMap.set(ControlKey.ADDRESS_STAIR, new ControlProperties(ControlKey.ADDRESS_STAIR, 'Etage', 'text'));
        this.controlPropertiesMap.set(ControlKey.ADDRESS_BAT_INFO, new ControlProperties(ControlKey.ADDRESS_BAT_INFO, 'Batiment (n° et nom)', 'text'));
        this.controlPropertiesMap.set(ControlKey.ADDRESS_STREET, new ControlProperties(ControlKey.ADDRESS_STREET, 'Rue (n° et nom)', 'text'));
        this.controlPropertiesMap.set(ControlKey.ADDRESS_DISTRICT, new ControlProperties(ControlKey.ADDRESS_DISTRICT, 'Quartier', 'text'));
        this.controlPropertiesMap.set(ControlKey.ADDRESS_BP, new ControlProperties(ControlKey.ADDRESS_BP, 'BP', 'text'));
        this.controlPropertiesMap.set(ControlKey.ADDRESS_POSTAL_CODE, new ControlProperties(ControlKey.ADDRESS_POSTAL_CODE, 'Code postal', 'text'));
        this.controlPropertiesMap.set(ControlKey.ADDRESS_CITY, new ControlProperties(ControlKey.ADDRESS_CITY, 'Commune', 'text'));
        this.controlPropertiesMap.set(ControlKey.CONTACT_PHONE_HOME, new ControlProperties(ControlKey.CONTACT_PHONE_HOME, 'Tél. domicile', 'tel'));
        this.controlPropertiesMap.set(ControlKey.CONTACT_PHONE_WORK, new ControlProperties(ControlKey.CONTACT_PHONE_WORK, 'Tél. travail', 'tel'));
        this.controlPropertiesMap.set(ControlKey.CONTACT_PHONE_CELL, new ControlProperties(ControlKey.CONTACT_PHONE_CELL, 'Tél. mobile', 'tel'));
        this.controlPropertiesMap.set(ControlKey.CONTACT_EMAIL, new ControlProperties(ControlKey.CONTACT_EMAIL, 'Adresse e-mail pour réception de la décision', 'email'));

        this.controlPropertiesMap.set(ControlKey.MARITAL_STATUS, new ControlProperties(ControlKey.MARITAL_STATUS, 'Status marital', 'list'));
        this.controlPropertiesMap.set(ControlKey.MARITAL_SITUATION_DATE, new ControlProperties(ControlKey.MARITAL_SITUATION_DATE, 'Date', 'date'));
        this.controlPropertiesMap.set(ControlKey.CHILD_LINK, new ControlProperties(ControlKey.CHILD_LINK, 'Lien', 'list'));
        this.controlPropertiesMap.set(ControlKey.CHILD_LINK_PRECISION, new ControlProperties(ControlKey.CHILD_LINK_PRECISION, 'Précisez', 'text'));
        this.controlPropertiesMap.set(ControlKey.PRO_SITUATION, new ControlProperties(ControlKey.PRO_SITUATION, 'Situation', 'list'));
        this.controlPropertiesMap.set(ControlKey.PRO_SITUATION_DATE, new ControlProperties(ControlKey.PRO_SITUATION_DATE, 'Date', 'date'));
        this.controlPropertiesMap.set(ControlKey.JOB_TITLE, new ControlProperties(ControlKey.JOB_TITLE, 'Profession', 'text'));
        this.controlPropertiesMap.set(ControlKey.EMPLOYER_NAME, new ControlProperties(ControlKey.EMPLOYER_NAME, 'Employeur', 'text'));
        this.controlPropertiesMap.set(ControlKey.SOCIAL_SECURITY_ORGA, new ControlProperties(ControlKey.SOCIAL_SECURITY_ORGA, 'Organisme', 'checkbox'));

        this.controlPropertiesMap.set(ControlKey.MONTHLY_PAY, new ControlProperties(ControlKey.MONTHLY_PAY, 'Salaire mensuel', 'number'));
        this.controlPropertiesMap.set(ControlKey.PENSION, new ControlProperties(ControlKey.PENSION, 'Pension/Retraite CAFAT et CRE', 'number'));
        this.controlPropertiesMap.set(ControlKey.LIBERAL_INCOME, new ControlProperties(ControlKey.LIBERAL_INCOME, 'Traitement/Bénéfices prof. libérales', 'number'));
        this.controlPropertiesMap.set(ControlKey.OTHER_INCOME, new ControlProperties(ControlKey.OTHER_INCOME, 'Autres revenus', 'number'));
        this.controlPropertiesMap.set(ControlKey.INCOME, new ControlProperties(ControlKey.INCOME, 'Revenus', 'number'));
    }

    getControlPropertiesMap() {
        return this.controlPropertiesMap;
    }
}

export class ControlProperties {
    key: string;
    label: string;
    type: string;

    constructor(key: string, label: string, type: string) {
        this.key = key;
        this.label = label;
        this.type = type;
    }
}
