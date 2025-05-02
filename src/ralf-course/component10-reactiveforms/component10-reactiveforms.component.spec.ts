import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component10ReactiveformsComponent } from './component10-reactiveforms.component';

describe('Component10ReactiveformsComponent', () => {
  let component: Component10ReactiveformsComponent;
  let fixture: ComponentFixture<Component10ReactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component10ReactiveformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component10ReactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
