import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  standalone: true,
  imports: [],
  templateUrl: './componente-uno.component.html',
  styleUrl: './componente-uno.component.css'
})
export class ComponenteUnoComponent {
  var2 = 'secondo';
}
