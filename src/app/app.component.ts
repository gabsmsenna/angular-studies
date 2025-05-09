import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component01Component } from "../ralf-course/component01-interpolacao/component01.component";
import { Component02Component } from "../ralf-course/component02-eventBinding/component02.component";
import { Component03Component } from "../ralf-course/component03-propertyBinding/component03.component";
import { Component04Component } from "../ralf-course/component04-ngIf/component04.component";
import { Component05Component } from "../ralf-course/component05-ngFor/component05.component";
import { Componente06Component } from "../ralf-course/component06-ngSwitch/componente06.component";
import { Component07Component } from "../ralf-course/component07-ngStyle&ngClass/component07.component";
import { Component08ControlFlowComponent } from "../ralf-course/component08-control-flow/component08-control-flow.component";
import { Component09FormsmoduleComponent } from "../ralf-course/component09-formsmodule/component09-formsmodule.component";
import { Component10ReactiveformsComponent } from "../ralf-course/component10-reactiveforms/component10-reactiveforms.component";
import { Component11ProjectComponent } from "../ralf-course/component11-project/component11-project.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component01Component, Component02Component, Component03Component, Component04Component, Component05Component, Componente06Component, Component07Component, Component08ControlFlowComponent, Component09FormsmoduleComponent, Component10ReactiveformsComponent, Component11ProjectComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-basico';
}
