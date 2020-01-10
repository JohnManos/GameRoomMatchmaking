import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGameModeDialogComponent } from './select-game-mode-dialog.component';

describe('SelectGameModeDialogComponent', () => {
  let component: SelectGameModeDialogComponent;
  let fixture: ComponentFixture<SelectGameModeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGameModeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGameModeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
