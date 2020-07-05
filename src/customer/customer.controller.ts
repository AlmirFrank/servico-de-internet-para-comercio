import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Cliente } from './cliente.entity';
import { plainToClass } from "class-transformer";
import { CustomerDto } from './customer.dto';

@Controller('customer')
export class CustomerController {

  constructor(private readonly service: CustomerService) { }
  
  @Post()
  save(@Body() customerDto: CustomerDto) {

    const customer = plainToClass(Cliente, customerDto)
    return this.service.save(customer);
    
  }
  
  @Get()
  findAll() {
    return this.service.findAll();

  }

  @Get(":id")
  findById(@Param('id') id: number) {
    return this.service.findById(id);

  }

  @Put(':id')
  update(@Param('id') id: number, @Body() customerDto: CustomerDto) {
    customerDto.id = id;
    const customer = plainToClass(Cliente, customerDto);
      return this.service.update(customer);

  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.service.delete(id);

  }
  
}
