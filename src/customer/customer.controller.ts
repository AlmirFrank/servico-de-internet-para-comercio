import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Cliente } from './cliente.entity';

@Controller('customer')
export class CustomerController {

  constructor(private readonly service: CustomerService) { }
  
  @Post()
  save(@Body() customer: Cliente) {
    return this.service.save(customer);
    
  }
  
  @Get()
  findAll() {
    return this.service.findAll();

  }

  @Get(":id")
  findById(id: number) {
    return this.service.findById(id);

  }

  @Put()
  update(@Body() customer: Cliente) {
    return this.service.update(customer);

  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.service.delete(id);

  }
  
}
