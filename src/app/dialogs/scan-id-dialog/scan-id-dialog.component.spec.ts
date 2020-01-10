import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanIdDialogComponent } from './scan-id-dialog.component';

describe('ScanIdDialogComponent', () => {
  let component: ScanIdDialogComponent;
  let fixture: ComponentFixture<ScanIdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanIdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
