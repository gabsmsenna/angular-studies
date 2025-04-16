import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component08ControlFlowComponent } from './component08-control-flow.component';

describe('Component08ControlFlowComponent', () => {
  let component: Component08ControlFlowComponent;
  let fixture: ComponentFixture<Component08ControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component08ControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component08ControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
