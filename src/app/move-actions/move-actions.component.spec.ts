import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveActionsComponent } from './move-actions.component';

describe('MoveActionsComponent', () => {
  let component: MoveActionsComponent;
  let fixture: ComponentFixture<MoveActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
