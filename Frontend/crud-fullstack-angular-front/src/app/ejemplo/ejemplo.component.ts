import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.scss'
})
export class EjemploComponent {
  nombre: string = 'Usuario';
}
