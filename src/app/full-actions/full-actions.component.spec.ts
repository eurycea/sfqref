import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullActionsComponent } from './full-actions.component';

describe('FullActionsComponent', () => {
  let component: FullActionsComponent;
  let fixture: ComponentFixture<FullActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
