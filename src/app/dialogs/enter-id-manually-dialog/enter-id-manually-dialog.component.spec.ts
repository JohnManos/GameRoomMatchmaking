import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterIdManuallyDialogComponent } from './enter-id-manually-dialog.component';

describe('EnterIdManuallyDialogComponent', () => {
  let component: EnterIdManuallyDialogComponent;
  let fixture: ComponentFixture<EnterIdManuallyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterIdManuallyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterIdManuallyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
