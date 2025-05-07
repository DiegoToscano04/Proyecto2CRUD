import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    EjemploComponent,
    CustomerListComponent,
    CustomerAddComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fullstack';
}
