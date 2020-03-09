import {Component, Input, OnInit} from '@angular/core';
import {ProfessionalStatus} from '@app/_models/referential/professional-status';
import {MaritalStatus} from '@app/_models/referential/marital-status';
import {ChildLink} from '@app/_models/referential/child-link';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ControlKey} from '@app/_models/controlkey';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/faCheckCircle';

@Component({
    selector: 'app-justificative-attachments',
    templateUrl: './justificative-attachments.component.html',
    styleUrls: ['./justificative-attachments.component.scss'],
})
export class JustificativeAttachmentsComponent implements OnInit {

    @Input() inquiryForm: FormGroup;

    attachmentFrom: FormGroup;

    childLink: ChildLink;
    proStatus: ProfessionalStatus;
    maritalStatus: MaritalStatus;

    neededDocuments = new Map();
    selectedDocuments = new Array<string>();
    remainingDocuments = new Array<Set<string>>();

    missingIcon = faExclamationCircle;
    okIcon = faCheckCircle;


    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.childLink = this.inquiryForm.get(ControlKey.GRP_IDENTITY).get(ControlKey.GRP_APPLICANT).get(ControlKey.GRP_CHILD_LINK).get(ControlKey.CHILD_LINK).value;
        this.proStatus = this.inquiryForm.get(ControlKey.GRP_IDENTITY).get(ControlKey.GRP_APPLICANT).get(ControlKey.GRP_PRO_SITUATION).get(ControlKey.PRO_SITUATION).value;
        this.maritalStatus = this.inquiryForm.get(ControlKey.GRP_IDENTITY).get(ControlKey.GRP_APPLICANT).get(ControlKey.GRP_FAMILY_SITUATION).get(ControlKey.MARITAL_STATUS).value;

        this.neededDocuments.set('ID', {category: 'Situation familiale', key: 'ID', label: 'Justificatif d\'identité pour les parents'});
        this.neededDocuments.set('extrait', {
            category: 'Situation familiale',
            key: 'extrait',
            label: 'Extrait de naissance des enfants ou livret de famille complet'
        });
        this.neededDocuments.set('handicap', {
            category: 'Situation familiale',
            key: 'handicap',
            label: 'Justificatifs handicap (carte CHR)'
        });
        this.neededDocuments.set('separation', {
            category: 'Situation familiale',
            key: 'separation',
            label: 'Décision de justice fixant la résidence des enfants'
        });
        this.neededDocuments.set('adoption', {
            category: 'Situation familiale',
            key: 'adoption',
            label: 'Acte d\'adoption, de delegation ou de tutelle'
        });

        this.neededDocuments.set('quittance', {category: 'Residence', key: 'quittance', label: 'Quittance eau electricité'});
        this.neededDocuments.set('logerParUnTierQuittance', {
            category: 'Residence',
            key: 'logerParUnTierQuittance',
            label: 'Quittance eau electricité du tiers'
        });
        this.neededDocuments.set('logerParUnTierID', {
            category: 'Residence',
            key: 'logerParUnTierID',
            label: 'Piece d\'identité du logeur'
        });
        this.neededDocuments.set('logerParUnTierAttestation', {
            category: 'Residence',
            key: 'logerParUnTierAttestation',
            label: 'Attestation de logement'
        });

        this.attachmentFrom = this.fb.group({
            attachments: this.fb.array([])
        });

        this.inquiryForm.registerControl('justificative-attachments', this.attachmentFrom);
    }

    onDocumentTypeSelected($event, index) {
        const key = $event.target.value;
        const oldKey = this.selectedDocuments[index];
        this.selectedDocuments[index] = key;
        this.remainingDocuments.forEach((docs, i) => {
            if (i !== index) {
                if (oldKey) {
                    docs.add(this.neededDocuments.get(oldKey).key);
                }
                docs.delete(this.neededDocuments.get(key).key);
            }
        });
    }

    isDocSelected(key: string): boolean {
        return this.selectedDocuments.indexOf(key) !== -1;
    }

    getRemainingDocuments(index) {
        let docs: Set<string> = this.remainingDocuments[index];

        if (!docs) {
            docs = new Set<string>();
            this.neededDocuments.forEach(d => {
                if (!this.isDocSelected(d.key)) {
                    docs.add(d.key);
                }
            });
            this.remainingDocuments[index] = docs;
        }
        return docs;
    }

    getLabel(key: string) {
        return this.neededDocuments.get(key).label;
    }

    onFileRemove($event) {
        this.remainingDocuments.splice($event.index, 1);

        const selected = this.selectedDocuments[$event.index];
        if (selected) {
            this.selectedDocuments.splice($event.index, 1);
            this.remainingDocuments.forEach((docs, i) => {
                docs.add(this.neededDocuments.get(selected).key);
            });
        }
    }

    get attachments() {
        return this.attachmentFrom.get('attachments') as FormArray;
    }

    onDrop(files: File[]) {
        for (const file of files) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                console.log(reader.result);
                this.attachments.push(this.fb.group({
                    file: [file, Validators.required],
                    type: ['', Validators.required]
                }));
            };
            reader.readAsDataURL(file);
        }
    }
}


export class JustificativeAttachment {
    key: string;
    label: string;
    category: string;
}
