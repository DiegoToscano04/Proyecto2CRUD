import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api : string = 'http://localhost:8080/api/customers';
  private apicreate : string = 'http://localhost:8080/api/customers/create';
  
  constructor(private http:HttpClient) { }
  
  getCustomerList():Observable<Customer []>{
    return this.http.get<Customer []>(this.api);

  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apicreate, customer);
  }

  deleteCustomerById(id: number): Observable<any> { //Dos sintaxis:
    return this.http.delete<any>(`${this.api}/${id}`);//1. Template Literals
  }

  /*deleteCustomerById(id: number): Observable<any> {//2. Concatenación
    return this.http.delete(this.api+'/'+id);
    }*/
}
