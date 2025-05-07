package com.codeapp.crud_fullstack_angular.service;

import com.codeapp.crud_fullstack_angular.entity.Customer;
import com.codeapp.crud_fullstack_angular.exception.ResourceNotFoundException;
import com.codeapp.crud_fullstack_angular.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findById(Integer id) {//optional <customer>
        Customer customer = customerRepository.findById(id).orElseThrow(//orElseThrow revisa si contiene Customer o está vacío
                () ->{ //Función Lambda
                    throw new ResourceNotFoundException("Customer con id "+id+" no se encuentra");//función creada en exception
                    //en java las excepciones son objetos, por eso creamos la instancia new de la clase exception asociada ResourceNotFoundException
                    //throw interrumpe el flujo normal del programa y busca un manejador de excepciones
                }
        );
        //return customerRepository.findById(id).get();
        return customer;
    }


    @Override
    public void deleteById(Integer id) {
                customerRepository.deleteById(id);
    }

    @Override
    public Customer update(Customer customer) {
        return customerRepository.save(customer);
    }
}
