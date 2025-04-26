import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component09-formsmodule',
  imports: [FormsModule],
  templateUrl: './component09-formsmodule.component.html',
  styleUrl: './component09-formsmodule.component.css'
})
export class Component09FormsmoduleComponent {
  nome:string = '';
  cidade:string = '';
}
