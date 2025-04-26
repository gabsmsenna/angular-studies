import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component11ProjectComponent } from './component11-project.component';

describe('Component11ProjectComponent', () => {
  let component: Component11ProjectComponent;
  let fixture: ComponentFixture<Component11ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component11ProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component11ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
