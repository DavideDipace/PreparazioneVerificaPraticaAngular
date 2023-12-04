import { Component } from '@angular/core';
import { ComponenteTreComponent } from '../componente-tre/componente-tre.component';

@Component({
  selector: 'app-componente-due',
  standalone: true,
  imports: [ComponenteTreComponent],
  templateUrl: './componente-due.component.html',
  styleUrl: './componente-due.component.css'
})
export class ComponenteDueComponent {
  var3 = 'terzo';
}
