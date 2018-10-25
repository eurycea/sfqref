import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftActionsComponent } from './swift-actions.component';

describe('SwiftActionsComponent', () => {
  let component: SwiftActionsComponent;
  let fixture: ComponentFixture<SwiftActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiftActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
