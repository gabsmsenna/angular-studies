import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component10-reactiveforms',
  imports: [ReactiveFormsModule],
  templateUrl: './component10-reactiveforms.component.html',
  styleUrl: './component10-reactiveforms.component.css'
})
export class Component10ReactiveformsComponent {

  form = new FormGroup({
    nome : new FormControl(''),
    cidade : new FormControl('')
  });
}
