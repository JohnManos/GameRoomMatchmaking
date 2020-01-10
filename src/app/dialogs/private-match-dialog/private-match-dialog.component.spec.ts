import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMatchDialogComponent } from './private-match-dialog.component';

describe('PrivateMatchDialogComponent', () => {
  let component: PrivateMatchDialogComponent;
  let fixture: ComponentFixture<PrivateMatchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateMatchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMatchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
