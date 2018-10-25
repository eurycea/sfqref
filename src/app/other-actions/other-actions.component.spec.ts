import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherActionsComponent } from './other-actions.component';

describe('OtherActionsComponent', () => {
  let component: OtherActionsComponent;
  let fixture: ComponentFixture<OtherActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
