import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component09FormsmoduleComponent } from './component09-formsmodule.component';

describe('Component09FormsmoduleComponent', () => {
  let component: Component09FormsmoduleComponent;
  let fixture: ComponentFixture<Component09FormsmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component09FormsmoduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component09FormsmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
