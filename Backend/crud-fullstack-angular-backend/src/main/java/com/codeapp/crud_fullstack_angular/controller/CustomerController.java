package com.codeapp.crud_fullstack_angular.controller;

import com.codeapp.crud_fullstack_angular.entity.Customer;
import com.codeapp.crud_fullstack_angular.service.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//localhost:8080/api/customers
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

    private final CustomerService customerService;
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }
    //URL: localhost:8080/api/customers/create
    @PostMapping("/create")//Ruta endpoint
    public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }
    //URL: localhost:8080/api/customers
    @GetMapping
    public List<Customer> findAll(){
        return customerService.findAll();
    }
    //URL: localhost:8080/api/customers/parámetro(id), por ejemplo 1,2,etc.
    @GetMapping("/{id}")
    public Customer findById(@PathVariable Integer id){
        return customerService.findById(id);
    }
    //URL: localhost:8080/api/customers/parámetro(id), por ejemplo 1,2,etc.
    @DeleteMapping("/{id}")
    public void deleteBydId(@PathVariable Integer id){
        customerService.deleteById(id);
    }
    //URL: localhost:8080/api/customers
    @PutMapping
    public Customer updateCustomer(@RequestBody Customer customer){//customer del cliente
        Customer customerDb = customerService.findById(customer.getId());//customer de la DB
        customerDb.setFirstName(customer.getFirstName());//Modificar el customer de la DB con los nuevos datos del customer Cliente
        customerDb.setLastName(customer.getLastName());
        customerDb.setEmail(customer.getEmail());
        return customerService.update(customerDb);//Retornar el customer modificado
    }

}