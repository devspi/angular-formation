import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[appDropzone]'
})
export class DropzoneDirective {

    @Output() dropped = new EventEmitter<FileList>();
    @Output() hovered = new EventEmitter<boolean>();

    @HostListener('dragover', ['$event']) onDragOver($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.hovered.emit(true);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.hovered.emit(false);
    }

    @HostListener('drop', ['$event'])
    public ondrop($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }

}
