import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponenteDueComponent } from './componente-due/componente-due.component';
import { ComponenteTreComponent } from './componente-tre/componente-tre.component';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComponenteUnoComponent, ComponenteDueComponent, ComponenteTreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dipace';
  var1 = "l'app";
}
