import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule,
            RouterLink
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit{
  
  customers: Customer [] = [];

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.listCustomer();
  }

  listCustomer(){
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers);
      }
    )
  }

  deleteCustomer(id: number){
    console.log(id);
    this.customerService.deleteCustomerById(id).subscribe(
      () => this.listCustomer()
    )
  }

}
