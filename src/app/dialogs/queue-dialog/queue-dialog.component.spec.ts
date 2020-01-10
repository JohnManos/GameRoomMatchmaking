import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueDialogComponent } from './queue-dialog.component';

describe('QueueDialogComponent', () => {
  let component: QueueDialogComponent;
  let fixture: ComponentFixture<QueueDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
