import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';

@Component({
    selector: 'app-uploader',
    template: `
        <div class="dropzone" appDropzone (dropped)="onDrop($event)" (hovered)="toggleHover($event)">
            <h3>Glissez et déposez les fichiers</h3>
            <button type="button" (click)="fileInput.click()">... ou choisissez les fichiers</button>
            <input hidden type="file" #fileInput multiple (change)="onDrop($event.target.files)">
        </div>
        <div *ngFor="let file of files;let i= index">
            <ng-container [ngTemplateOutlet]="uploadFileTemplate" [ngTemplateOutletContext]="{file: file, index:i}"></ng-container>
            <button (click)="removeFile(file)">
                <fa-icon [icon]="removeIcon"></fa-icon>
            </button>
        </div>
    `,
    styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

    constructor() {
    }

    isHovering: boolean;
    removeIcon = faTrash;
    files: File[] = [];
    @Input() uploadFileTemplate: TemplateRef<any>;
    @Output() fileRemoved = new EventEmitter<any>();
    @Output() dropped = new EventEmitter<File[]>();

    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    onDrop(files: FileList) {
        const newFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            if (!this.files.find(f => f.name === file.name && f.size === file.size)) {
                this.files.push(file);
                newFiles.push(file);
            }
        }
        this.dropped.emit(newFiles);
    }

    removeFile(file: File) {
        const index = this.files.indexOf(file, 0);
        if (index > -1) {
            this.files.splice(index, 1);
            this.fileRemoved.emit({file, index});
        }
    }
}
