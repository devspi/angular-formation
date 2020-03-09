import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {JustificativeAttachmentsComponent} from '@app/scholarship-inquiry/scholarship-inquiry-form/justificative-attachments/justificative-attachments.component';


describe('ScholarshipInquiryFormComponent', () => {
    let component: JustificativeAttachmentsComponent;
    let fixture: ComponentFixture<JustificativeAttachmentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JustificativeAttachmentsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JustificativeAttachmentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
