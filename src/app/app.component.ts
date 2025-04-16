import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component01Component } from "./component01-interpolacao/component01.component";
import { Component02Component } from "./component02-eventBinding/component02.component";
import { Component03Component } from "./component03-propertyBinding/component03.component";
import { Component04Component } from "./component04-ngIf/component04.component";
import { Component05Component } from "./component05-ngFor/component05.component";
import { Componente06Component } from "./component06-ngSwitch/componente06.component";
import { Component07Component } from "./component07-ngStyle&ngClass/component07.component";
import { Component08ControlFlowComponent } from "./component08-control-flow/component08-control-flow.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component01Component, Component02Component, Component03Component, Component04Component, Component05Component, Componente06Component, Component07Component, Component08ControlFlowComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-basico';
}
