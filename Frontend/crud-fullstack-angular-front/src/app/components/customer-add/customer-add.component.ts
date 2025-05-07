import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.scss'
})
export class CustomerAddComponent implements OnInit{
  
  firstName : string = '';
  lastName : string = '';
  email : string = '';

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
  }

  addCustomer() {
    let customer = new Customer(null, this.firstName, this.lastName, this.email);
    console.log(customer);
    this.customerService.createCustomer(customer).subscribe(
      res => console.log(res)
    )

  }
}
